// 上传文章

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    content: String,
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

ArticleSchema.pre('save', (next) => {
    // if(this.isNew) {
    //     this.meta.update = this.meta.createAt = Date.now();
    // }else {
    //     this.meta.update = Date.now();
    // }
    next();
});

ArticleSchema.statics = {
    fetch(cb) {
        return this.find({})
                .sort('meta.updateAt')
                .exec(cb);
    },
    findById(id, cb) {
        return this
                .findOne({_id: id})
                .exec(cb)
    }
};

let Article = mongoose.model('Article', ArticleSchema, 'article');
module.exports = Article;