// 用户注册、登录
let bcrypt = require('bcrypt');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const saltRounds = 10;

let UserSchema = new Schema({
    name: String,
    pwd: String,
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


UserSchema.pre('save', function(next) {

    // if(this.meta.createAt !== Date.now()) {
    //     this.meta.updateAt = Date.now();
    // }
    let _this = this;

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(_this.pwd, salt, (err, hash) => {
            if(err) return next(err);

            _this.pwd = hash;
            next();
        })
    });

});

UserSchema.methods = {
    comparePassword(pwd, cb) {
        bcrypt.compare(pwd, this.pwd, (err, result) => {
            if(err) return cb(err);

            cb(null, result);
        })
    }
};

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

    updateByName(name, newData) {
        let _this = this;
        return new Promise((resolve, reject) => {
            _this.findByName(name)
                    .then((oldData) => {
                        if(oldData) {
                            _this.update(oldData, newData, (err, result) => {
                                if(err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                }
                            })
                        } else {
                            reject(oldData);
                        }

                    })
        });

    }
};

let User = mongoose.model('User', UserSchema, 'users');
module.exports = User;