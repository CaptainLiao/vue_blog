let express = require('express');
let router = express.Router();
let User = require('../models/user');
let marked = require('marked');
let moment = require('moment');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users.art', { title: '廖大爷s' });
});


/* 用户登录页 */
router.get('/login', function(req, res, next) {
    res.render('login.art', { title: '廖大爷s' });
});

router.post('/login', function(req, res, next) {
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

    User.findOne({name:name}, (err, user) => {
        if(err) console.log(err);

        if(!user) {
            res.send({code: -1, msg: '没有找到用户名', data: ''});
        } else {
            user.comparePassword(pwd, (err, isMatched) => {
                if(err) console.log(err);

                if(isMatched) {
                    res.send({code: 0, msg: 'success', data: 'ok'});
                }else {
                    res.send({code: -1, msg: '用户名和密码不匹配', data: ''});
                }
            })
        }

    })

});

/* 用户注册页 */
router.get('/register', function(req, res, next) {
    res.render('register.art', { title: '注册',  id: 'register'});
});

router.post('/register', function(req, res, next) {
    let body = req.body;
    let name = body.name;
    let pwd = body.pwd;
    let confirmPwd = body.confirmPwd;

    if(!name || !pwd || !confirmPwd) {
        res.send({code: -1, msg: '用户名或密码不能为空', data: ''});
        return
    }

    if(pwd !== confirmPwd) {
        res.send({code: -1, msg: '密码输入不一致', data: ''});
        return
    }

    User.findByName(name)
            .then(users => {
                if(users) {
                    res.send({code: -1,msg: '用户已存在',users})
                }else {
                    let registerUser = new User(body);

                    registerUser.save((err, result) => {
                        if(err) {
                            res.send({code: -1,msg: 'db error',err})
                        }else {
                            res.send({code: 0, msg: 'success', result});
                        }
                    });
                }
            });


});

/* 用户修改密码页 */
router.get('/edit', function(req, res, next) {
    res.render('register.art', { title: '修改密码',  id: 'editPwd'});
});

router.post('/edit', function(req, res, next) {
    let body = req.body;
    let name = body.name;
    let pwd = body.pwd;
    let confirmPwd = body.confirmPwd;

    if(!name || !pwd || !confirmPwd) {
        res.send({code: -1, msg: '用户名或密码不能为空', data: ''});
        return
    }

    if(pwd !== confirmPwd) {
        res.send({code: -1, msg: '密码输入不一致', data: ''});
        return
    }

    User.updateByName(name, body)
            .then(result => {
                res.send({code: 0, msg: 'success', result});
            })
            .catch(err => {
                res.send({code: -1,msg: 'error',err})
            });

});


module.exports = router;
