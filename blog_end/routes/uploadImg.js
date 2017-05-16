let express = require('express');
let router = express.Router();
let multer = require("multer");
let target = './public/images';
let upload = multer({dest: target});
let fs = require('fs');
let qiniuUpload = require('../qiniuUpload')

/**
 * 图片上传接口
 */
router.post('/',upload.single('file'), function(req, res, next) {
    console.log('file: ',req.file);
    let file = req.file;
    let oldFile = file.path;
    let newPath = oldFile.split(file.filename)[0] + file.originalname;

    console.log(newPath)
    fs.renameSync(file.path, newPath);
    console.log(qiniuUpload);
    qiniuUpload.qiniuUpload([newPath]).then(result => {
        res.send(JSON.stringify(result));
    });
});


module.exports = router;
