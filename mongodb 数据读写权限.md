首先，我们先对mongodb 数据库的权限做一点说明：

1 默认情况下，mongodb 没有管理员账号
2 只有在 admin 数据库中才能添加管理员账号并开启权限
3 用户只能在所在的数据库中登录，包括管理员账号
4 管理员可以管理所有数据库，但不能直接管理，需要在 admin 里认证后才能

### 一、设置管理员账号

ssh 登录服务器，执行：
````
// 开启ubuntu上的数据库
sudo mongod service start

// 使用shell
mongo --port 19999

// 切换到 admin 数据库
use admin

// 创建管理员 fayin
db.createUser({user: 'fayin', pwd: 'fayin@39.108', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]})

// 为账号授权，返回 1 表示成功
db.auth('fayin', 'fayin@39.108')

````

### 二、设置单数据库用户权限

接着上一个步骤，我们分别为不同的数据库创建不同的用户角色。**注意：**每次创建新的用户之前，需要`use admin ` 和 `db.auth('fayin', 'fayin@39.108')`.

````

// 创建用户 fayin_blog 对数据库 vueBlog 拥有读写权限。
use vueBlog

db.createUser({user: 'fayin_blog', pwd: 'fayin_blog@39.108', roles: [{
    role: 'readWrite',
    db: 'vueBlog'
}])

db.createUser({user: 'fayinme_blog', pwd: 'fayinme_blog39108'}, roles: [{role: 'readWrite',db:'vueBlog'}])


// 创建用户 fayin_blog_read 对数据库 vueBlog 拥有读权限。
use vueBlog

db.createUser({user: 'fayin_blog_read', pwd: 'fayin_blog_read@39.108', roles: [{role: 'read',db: 'vueBlog'}])

````
### 三、修改配置文件，开启数据库登录验证

````
sudo vi /etc/mongod.conf

````
找到 security 项，键入：
````
security
  authorization: 'enabled'

````
保存并退出，重启mongodb：sudo service mongod restart 

### 四、重新登录数据库

当重启生效后，我们再次使用数据库，会报错：not authorized on admin to execute command ，所以，我们需要先登录 admin 数据库：即使用哪个数据库之前，需要先对用户进行授权。

````
use admin

db.auth('fayin', 'fayin@39.108')

````

### 五、登录某个数据库

````
mongo 127.0.0.1:19999/vueBlog -u fayin_blog -p fayin@39.108

````





