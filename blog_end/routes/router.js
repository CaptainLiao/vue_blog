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

    // 文章
    app.get('/article', Article.someMiddleware, Article.edit);
    app.get('/article/list', Article.list);
    app.get('/article/archive', Article.archive);

    app.post('/api/article/new', Article.create);
    app.post('/api/article/del', Article.del);
    app.post('/api/uploadImg', upload.single('file'), UploadImg.uploadImg)

};