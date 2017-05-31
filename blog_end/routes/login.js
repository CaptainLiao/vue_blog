let express = require('express');
let router = express.Router();
let User = require('../models/user');
let marked = require('marked');
let moment = require('moment');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login.art', { title: '廖大爷s' });
});


router.post('/', function(req, res, next) {
    console.log(req.body)
    let body = req.body;
    let name = body.name;
    let pwd = body.pwd;

    let code = 0;
    let data = '';
    let msg = '';
    let sendBody = '';

    if(!name || !pwd) {
        code = -1;
        msg = '用户名或密码不能为空';
        res.send({code, msg, data: ''});
        return
    }

    let newUser = new User({
        name,pwd
    });

    newUser.save((err, result) => {
        if(err) {
            res.send({code: -1,msg: 'db error',err})
        }else {
            res.send({code: 0, msg: 'success', result});
        }
    });

});


module.exports = router;
