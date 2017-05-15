

// const qiniu = require('qiniu');
//
// qiniu.conf.ACCESS_KEY = 'ZfEZGc8IWw_WvLNYa8-J6LCHRifl8Y0Tmz1FOyg3';
// qiniu.conf.SECRET_KEY = 'Y1sMVB-xUbyyrBfCdg1aH0zXY6p2ADTkz7OFLoCk';


let qn = require('qn');
let filepath = '../images/1.jpg';

let client = qn.create({
    accessKey: 'ZfEZGc8IWw_WvLNYa8-J6LCHRifl8Y0Tmz1FOyg3',
    secretKey: 'Y1sMVB-xUbyyrBfCdg1aH0zXY6p2ADTkz7OFLoCk',
    bucket: 'fayin',
    origin: 'opo2yekqx.bkt.clouddn.com',
});

// upload a file with custom key
client.uploadFile(filepath, {key: 'qn/lib/client.js'}, function (err, result) {
    console.log(result);
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


