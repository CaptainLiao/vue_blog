// 上传文章

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: String,
    content: String,
    type: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});


ArticleSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.updateAt = this.meta.createAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }

    next();
});

ArticleSchema.statics = {
    fetch(cb) {
        return this.find({})
                .sort('meta.updateAt')
                .exec(cb);
    },

    findById(id) {
        let _this = this;
        return new Promise((resolve, reject) => {
            _this.findOne({_id: id}, (err, result)=> {
                if(err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            })
        })
    },
    delById(id, cb) {
        return this.remove({_id: id})
                .exec(cb);
    },
    updateById(id, newData) {
        let _this = this;
        return new Promise((resolve, reject) => {
            _this.findById(id)
                    .then((oldData) => {
                        _this.update(oldData, newData, (err, result) => {
                            if(err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        })
                    })
        });

    }
};

let Article = mongoose.model('Article', ArticleSchema, 'article');
module.exports = Article;