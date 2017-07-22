
let Article = require('../models/article');
let Tags = require('../models/tags');
let marked = require('marked');


// middleware
exports.someMiddleware = (req, res, next) => {
    console.log(11111);
    next();
};

exports.edit = (req, res, next) => {
    console.log(req.query.id);
    let query = req.query;
    if(query && query.id) {
        let id = query.id.replace(/\"/g, '');

        Article.findById(id)
                .then(data => {
                    Tags.fetch((err, tags) => {
                        if (err) next(err);

                        res.render('article.art', { title: '修改文章', article: data, tags });
                    })
                })
    } else {
        Tags.fetch((err, data) => {
            if (err) next(err);

            res.render('article.art', { title: '新建文章', article: {},tags: data });
        })
        
    }

};

exports.list = (req, res, next) => {
    let id = +req.query.page;

    Article.count({}, (err, count) => {
       Article.fetch((err, data) => {
        if(err) next(err);
        
        res.render('articleList.art', { title: '文章列表', articles: data, count } );
        }, --id) 
    })
    
};

exports.create = (req, res, next) => {
    let articleObj = req.body;
    let id = articleObj.id;
    let newArticle = {};

    if(id) {
        id = id.replace(/\"/g, '');
        console.log(id);
        Article.updateById(id, articleObj)
                .then(result => {
                    res.send({code: 0, msg: 'success', result});
                })
                .catch(err => {
                    //res.send({code: -1,msg: 'error',err})
                    next(err);
                })
    }else {
        newArticle = new Article({
            content: articleObj.content,
            title: articleObj.title,
            type: articleObj.type
        });
        newArticle.save((err, result) => {
            if(err) next(err);
            res.send({code: 0, msg: 'success', result});
        });
    }

};


exports.del = (req, res, next) => {
    let id = req.body.id.replace(/\"/g, '');

    Article.delById(id, (err, article) => {
        if(err) next(err);

        res.send({code: 0, msg: 'success', article});
    })

};

exports.archive = (req, res, next) => {
    Article.fetch((err, data) => {
        if(err) next(err);
        data.map(function (item) {
            item.content = '';
            console.log(delete item.content);
            return item;
        });

        res.send({ articles: data ,code: 0})

    })
};

exports.apiList = (req, res, next) => {
    Article.fetch((err, data) => {
        if(err) next(err);
        res.send({ title: '文章列表', articles: data ,code: 0})
    })
};

exports.apiDetail = (req, res, next) => {
    console.log(req.query.id);
    let query = req.query;
    if(query && query.id) {
        let id = query.id.replace(/\"/g, '');

        Article.findById(id)
                .then(data => {
                    let content = data.content;
                    marked.setOptions({
                        highlight: function(code) {
                            return require('highlight.js').highlightAuto(code).value;
                        }
                    });
                    data.content = marked(content);
                    res.send({ msg: '文章详情', article: data })

                })
                .catch(err => next(err))
    } else {
        res.send('article.art', { msg: '文章详情', article: {} });
    }
};

