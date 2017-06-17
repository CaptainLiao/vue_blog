// 标签管理

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TagsSckema = new Schema({
    tag: String,
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


// TagsSckema.pre('save', function(next) {

//     // if(this.meta.createAt !== Date.now()) {
//     //     this.meta.updateAt = Date.now();
//     // }

// });


TagsSckema.statics = {
    fetch(cb) {
        return this.find({})
                .sort({'_id':-1})

                .exec(cb);
    },

    delById(id, cb) {
        return this.remove({_id: id})
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

let Tags = mongoose.model('Tags', TagsSckema, 'tags');
module.exports = Tags;