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
            default: new Date()
        },
        updateAt: {
            type: Date,
            default: new Date()
        }
    }
});


ArticleSchema.pre('update', function(next) {

    // if(this.meta.createAt !== Date.now()) {
    //     this.meta.updateAt = Date.now();
    // }

    next();
});

ArticleSchema.statics = {
    fetch(cb, id) {
        // if (id) {
        //     return this.find({'_id': {"$lt": id}})
        //         .limit(5)
        //         .sort({'_id':-1})
        //         .exec(cb);
        //     }else {
        //         return this.find({})
        //         .limit(5)
        //         .sort({'_id':-1})
        //         .exec(cb);
        //     }
        if(id) {
            return this.find({})
                .skip(id * 5)
                .limit(5)
                .sort({'_id':-1})
                .exec(cb);
        }else {
            return this.find({})
                .sort({'_id':-1})
                .exec(cb);
        }
        
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
                    .catch(err => reject(err))
        });

    }
};

let Article = mongoose.model('Article', ArticleSchema, 'article');
module.exports = Article;