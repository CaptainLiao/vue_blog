let Tags = require('../models/tags');

exports.list = (req, res, next) => {
    Tags.fetch((err, data) => {
        if (err) next(err);

        res.render('tag.art', {title: '标签管理', data})
    })
    
};

exports.create = (req, res, next) => {
    let body = req.body;
  
    console.log(body)
    let tags = new Tags({
        tag: body.tag
    });

    tags.save((err, result) => {
        if(err) next(err);
        res.send({code: 0, msg: 'success', result});
    })
}

exports.del = (req, res, next) => {
    let id = req.body.id;
    console.log(JSON.parse(id))

    Tags.delById(JSON.parse(id), (err, result) => {
        if(err) next(err);

        res.send({code: 0, msg: 'success', result});
    })
}