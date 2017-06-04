let User = require('./../controller/user');
let Index = require('./../controller/index');
let Article = require('./../controller/article');
let UploadImg = require('./../controller/uploadImg');

let multer = require("multer");
let target = './public/images';
let upload = multer({dest: target});

module.exports = function(app) {
    // 首页
    app.get('/', Index.showIndex);

    // 用户注册、登录、修改密码
    app.get('/user/login', User.showLogin);
    app.get('/user/register', User.showRegister);
    app.get('/user/edit', User.showEditPassword);

    app.post('/api/login', User.login);
    app.post('/api/register', User.register);
    app.post('/api/edit', User.editPassword);
    app.post('/api/logout', User.logout);

    // 文章
    app.get('/article', User.loginRequired, Article.edit);
    app.get('/article/list', User.loginRequired, Article.list);

    app.post('/api/article/new', User.loginRequired, Article.create);
    app.post('/api/article/del', User.loginRequired, Article.del);
    app.post('/api/uploadImg', User.loginRequired, upload.single('file'), UploadImg.uploadImg);

    // VUE前端用的接口
    app.get('/api/article', Article.someMiddleware, Article.apiDetail);
    app.get('/api/article/archive', Article.archive);
    app.get('/api/article/list', Article.apiList);

};