## express 使用法则

### 使用 public 存放静态文件
````
app.use(express.static(path.join(__dirname, '/pubilc')));

````
在项目中，在 public 下存放一个 css/main.css 文件，这样引入：
````
<link rel="stylesheet" href="/css/layui.css">

````