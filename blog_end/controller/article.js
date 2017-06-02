
let Article = require('../models/article');
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
                    if(req.headers.referer && req.headers.referer.indexOf('5000') < 0) {
                        let content = data.content;
                        marked.setOptions({
                            highlight: function(code) {
                                return require('highlight.js').highlightAuto(code).value;
                            }
                        });
                        data.content = marked(content);
                        res.send({ title: '修改文章', article: data })
                    }else  {
                        res.render('article.art', { title: '修改文章', article: data })
                    }

                })
    } else {
        res.render('article.art', { title: '新建文章', article: {} });
    }

};

exports.list = (req, res, next) => {
    Article.fetch((err, data) => {
        if(err) throw new Error(err);

        if(req.headers.referer && req.headers.referer.indexOf('5000') < 0) {
            res.send({ title: '文章列表', articles: data ,code: 0})
        }else {
            res.render('articleList.art', { title: '文章列表', articles: data } );
            return output({ title: '文章列表', articles: data ,code: 0})
        }

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
                    res.send({code: -1,msg: 'error',err})
                })
    }else {
        newArticle = new Article({
            content: articleObj.content,
            title: articleObj.title,
            type: articleObj.type
        });
        newArticle.save((err, result) => {
            if(err) {
                res.send({code: -1,msg: 'error',err})
            }else {
                res.send({code: 0, msg: 'success', result});
            }
        });
    }

};

exports.del = (req, res, next) => {
    let id = req.body.id.replace(/\"/g, '');

    Article.delById(id, (err, article) => {
        if(err) {
            res.send({code: -1,msg: 'error',err})
        }else {
            res.send({code: 0, msg: 'success', article});
        }
    })

};

exports.archive = (req, res, next) => {
    Article.fetch((err, data) => {
        if(err) {
            res.send({ err});
            return;
        }

        data.map(function (item) {
            item.content = '';
            console.log(delete item.content);
            return item;
        });

        res.send({ articles: data ,code: 0})

    })
};

