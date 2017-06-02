
let fs = require('fs');
let qiniuUpload = require('../public/javascripts/qiniuUpload');

/**
 * 图片上传接口
 */

exports.uploadImg = (req, res) => {
    console.log('file: ',req.file);
    let file = req.file;
    let oldFile = file.path;
    let newPath = oldFile.split(file.filename)[0] + file.originalname;

    fs.renameSync(file.path, newPath);

    qiniuUpload.qiniuUpload([newPath]).then(result => {
        fs.unlink(newPath, (err)=> {
            console.log(err);
        });
        let host = 'http://opz2g8x56.bkt.clouddn.com/';
        let _result = {
            code: 0,
            'msg': 'ok',
            data: {
                src: host + result[0].key,
                title: result[0].key
            }
        };
        res.send(JSON.stringify(_result));
    });
};

