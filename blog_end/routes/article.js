let express = require('express');
let router = express.Router();
let Article = require('../models/article');

// middleware
let someMiddleware = (req, res, next) => {
    console.log(11111);
    next();
};

let edit = (req, res, next) => {
    res.render('article.art', { title: '廖大爷s' });
};

let list = (req, res, next) => {
    res.render('article.art', { title: '廖s' });
};

let create = (req, res, next) => {
    let articleObj = req.body;
    let id = articleObj._id;
    let newArticle = {};

    newArticle = new Article({
        content: articleObj.content,
        title: articleObj.title
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
router.get('/list', edit);

// 文章新增
router.post('/new', create);

module.exports = router;
