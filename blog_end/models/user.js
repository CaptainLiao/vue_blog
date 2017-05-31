// 上传文章

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    pwd: String,
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


UserSchema.pre('update', function(next) {

    // if(this.meta.createAt !== Date.now()) {
    //     this.meta.updateAt = Date.now();
    // }

    next();
});

UserSchema.statics = {
    fetch(cb) {
        return this.find({})
                .sort({'_id':-1})

                .exec(cb);
    },

    findByName(name) {
        let _this = this;
        return new Promise((resolve, reject) => {
            _this.findOne({name: name}, (err, result)=> {
                if(err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            })
        })
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

let User = mongoose.model('User', UserSchema, 'users');
module.exports = User;