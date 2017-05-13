var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.art', { title: 'liao大爷' });
});

module.exports = router;
