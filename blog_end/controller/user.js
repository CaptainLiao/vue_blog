let User = require('../models/user');

exports.showLogin = (req, res) => {
    res.render('login.art', { title: '廖大爷s' });
};
exports.logout = (req, res) => {
    delete req.session.user;
    //res.redirect('/user/register');
    res.send({code: 0, msg: 'success', data: req.session});
}
exports.login = (req, res) => {

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
                    req.session.user = user;
                    res.send({code: 0, msg: 'success', data: req.session});
                }else {
                    res.send({code: -1, msg: '用户名和密码不匹配', data: ''});
                }
            })
        }

    })
};

exports.showRegister = (req, res) => {
    res.render('register.art', { title: '注册',  id: 'register'});
};
exports.register = (req, res) => {
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

};

exports.showEditPassword = (req, res) => {
    res.render('register.art', { title: '修改密码',  id: 'editPwd'});
};
exports.editPassword = (req, res) => {
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
};

exports.loginRequired = (req, res, next) => {
    let user = req.session.user;

    if(!user) {
        return res.redirect('/user/login');
    }

    next();
};
