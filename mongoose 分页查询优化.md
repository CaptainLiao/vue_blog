Mongoose 分页查询优化、获取数据总长度

无论是传统网页还是 ajax api，我们都不得不进行数据分页，一来节省带宽二来提升页面响应速度。作为一个数据完备的 web 应用，做好分页功能能极大提升用户体验。

### 简单的分页查询

在 mongoose 中，我们可以利用 skip、limit来进行分页：

````

Articl.find({})
		.skip(page * 5)
        .limit(5)
        .sort({'_id':-1})
        .exec(cb);
		
````

根据前端传入的 page 来跳过相应的页数，在进行查询返回结果。

### 分页查询优化

上面的方法在数据量较小的情况下运行的很好，但一旦数据较大很容易出现性能瓶颈。有没有更好的方式呢？

#### find + limit

我们知道，保存在 mongodb 数据库中对象有一个唯一的id：ObjectId，借此，我们可以利用它搞一些事情。

还记得 $gt、$lt 吗？我们要求前端返回一个 ObjectId ,通过 .find({'_id': {"$lt": ObjectId}}) 来实现查找，具体如下：

````
ArticleSchema.statics = {
    fetch(id, cb) {
        if (id) {
            return this.find({'_id': {"$lt": id}})
                .limit(5)
                .sort({'_id':-1})
                .exec(cb);
            }else {
                return this.find({})
                .limit(5)
                .sort({'_id':-1})
                .exec(cb);
            }
        
    }
}	

````
这样，我们就能获取到在给定 id 后面的数据了。

#### 避免用户无效点击

有了分页就需要用户点击查询，这里引申出另一个问题————如何避免无效点击？这里的无效指用户点击下一页后返回空数据。

**方案一：比较返回数据长度**

通过比较返回数据的实际长度和每页最大数据长度的值，如果实际长度 < 最大长度，说明下页为空了。潜在的问题是，如果他们相等，但下页数据为空，也会造成一次无效点击。

**方案二：获取数据总长度**

通过获取数据的总长度，除以页面显示的页数，得到总页数，这样就能完全避免上述问题。

在 mongoose 中，可以通过 .count() 方法获取模型数据的总长度：

````
    Article.count({}, (err, count) => {
       Article.fetch(id, (err, data) => { // 上面定义的方法 fetch
        if(err) next(err);
        res.render('articleList.art', { title: '文章列表', articles: data, count } );
        }) 
    })

````


