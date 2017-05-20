let express = require('express');
let router = express.Router();
let Article = require('../models/article');

// middleware
let someMiddleware = (req, res, next) => {
    console.log(11111);
    next();
};

let edit = (req, res, next) => {
    console.log(req.query.id);
    let query = req.query;
    if(query && query.id) {
        let id = query.id.split('"')[1] || query.id;
        console.log(id)
        Article.findById(id, (err, data) => {
            if(err) throw new Error(err);

            res.render('article.art', { title: '修改文章', article: data });
        });

    } else {
        res.render('article.art', { title: '新建文章' });
    }

};

let list = (req, res, next) => {
    Article.fetch((err, data) => {
        if(err) throw new Error(err);

        res.render('articleList.art', { title: '文章列表', articles: data } );
    })
};

let create = (req, res, next) => {
    let articleObj = req.body;
    let id = articleObj._id;
    let newArticle = {};

    newArticle = new Article({
        content: articleObj.content,
        title: articleObj.title,
        type: articleObj.type
    });
    newArticle.save((err, article) => {
        if(err) {
            res.send({code: -1,msg: 'error',err})
        }else {
            res.send({code: 0, msg: 'success', article});
        }
    });

};

// 文章编辑主页
router.get('/', someMiddleware, edit);

// 文章列表
router.get('/list', list);

// 文章新增
router.post('/new', create);

module.exports = router;
