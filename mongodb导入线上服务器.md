## 更改默认端口

`sudo vi /etc/mongod.conf`

进入conf文件，修改port值为19999保存并退出。

重启mongodb

`sudo service mongod restart`

进入mongo shell

`mongo --port 19999`

## 本地数据库导入线上服务器的mongodb中

1 备份本地数据库

git 切换到mongodb/data，输入：

`../bin/mongodump -h 127.0.0.1:27017 -d vueBlog -o ../data/vueBlog-backup`

2 git 打包数据库

`tar zcvf vueBlog.tar.gz vueBlog-backup`

3 上传到服务器

`scp -P 3999 /D/MongoDB/data/vueBlog.tar.gz fayin@39.108.54.110:/home/fayin/dbbackup/`

4 服务器解压上传后的文件（剩下步骤在线上进行）

ssh 登录服务器后：

````
cd dbbackup

tar xvf vueBlog.tar.gz

````

5 将数据导入服务器的mongodb中

`mongorestore --host 127.0.0.1:19999 -d vueBlog ./dbbackup/vueBlog-backup/vueBlog/`

6 查看服务器mongodb 导入后的数据

````
mongo --port 19999

show dbs
````