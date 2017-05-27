module.exports = {
    format: function() {
      console.log(1);
    },
  mergeArr:function(arr) {
    var obj = {},
      result = [],
      key;
    arr.forEach(function (item, index, arr) {
      for(key in item) {
        if(!obj[key]){
          obj[key] = [];
          obj[key].push(item[key])
        }else{
          obj[key].push(item[key])
        }
      }

    });
    for(var i in obj) {
      result.push(obj[i])
    }
    return result;
  },
  mergeArrByKey: function (arr, key) {
    var obj = {},
      result = [];
    arr.forEach(function (item, index, arr) {
      var m = item[key];
      if(!obj[m]) {
        obj[m] = [item];
      }else {
        [].push.call(obj[m],item);
      }
    });
    for(var i in obj) {
      var o = {};
      o[i] = obj[i];
      result.push(o)
    }
    return result;
  }
};


