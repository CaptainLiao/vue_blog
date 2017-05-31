let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login.art', { title: '廖大爷s' });
});

router.post('/', function(req, res, next) {
    res.send({code:0, data: '111'});
});


module.exports = router;
