

// const qiniu = require('qiniu');
//
// qiniu.conf.ACCESS_KEY = 'ZfEZGc8IWw_WvLNYa8-J6LCHRifl8Y0Tmz1FOyg3';
// qiniu.conf.SECRET_KEY = 'Y1sMVB-xUbyyrBfCdg1aH0zXY6p2ADTkz7OFLoCk';



let qn = require('qn');
let path = require('path');
let filePath = './public/images/33.jpg';

let client = qn.create({
    accessKey: 'ZfEZGc8IWw_WvLNYa8-J6LCHRifl8Y0Tmz1FOyg3',
    secretKey: 'Y1sMVB-xUbyyrBfCdg1aH0zXY6p2ADTkz7OFLoCk',
    bucket: 'fayinme',
    origin: 'opo2yekqx.bkt.clouddn.com',
});

let qiniuUpload = (filePaths) => {

    let qiniuPromise = filePaths.map(filePath => {

        // key 为上传到七牛云后自定义图片的名称
        return new Promise((resolve, reject) => {
            let fileName = path.win32.basename(filePath);
            client.uploadFile(filePath, {key: fileName}, function (err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
                // {
                //   hash: 'FhGbwBlFASLrZp2d16Am2bP5A9Ut',
                //   key: 'qn/lib/client.js',
                //   url: 'http://qtestbucket.qiniudn.com/qn/lib/client.js'
                //   "x:ctime": "1378150371",
                //   "x:filename": "client.js",
                //   "x:mtime": "1378150359",
                //   "x:size": "21944",
                // }

            });
        });
    });

    return Promise.all(qiniuPromise);

};


qiniuUpload(['./public/images/33.jpg', './public/images/1.jpg']).then(res => console.log(res));

