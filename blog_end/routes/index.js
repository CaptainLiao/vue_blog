let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/user/login')
  //res.render('index.art', { title: '廖大爷s' });
});



module.exports = router;
