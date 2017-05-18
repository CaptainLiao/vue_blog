let express = require('express');
let router = express.Router();
let Article = require('../models/article');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('article.art', { title: '廖大爷s' });
});

router.post('/new', function(req, res, next) {
    let articleObj = req.body;
    let id = articleObj._id;
    let newArticle = {};

    newArticle = new Article({
        content: articleObj.data
    });
    newArticle.save((err, article) => {
        if(err) {
            res.send({err})
        }else {
            res.send({article});
        }

    });
});
module.exports = router;
