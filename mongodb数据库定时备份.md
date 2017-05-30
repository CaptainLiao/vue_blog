部署之路

1、购买域名
2、购买一台云服务器
3、域名、服务器备案
4、搭建线上环境（SSH）

## 为数据库实现定时备份

### 一、ssh 登录服务器

`ssh -p 3999 fayin@39.108.54.110`

### 二、编写脚本自动备份

在根目录下执行以下命令：

````
mkdir tasks

cd tasks

vi vueBlog.sh

````

编辑vueBlog.sh文件

````
#!/bin/sh
backUpFolder=/home/fayin/backup/vueBlog
date_now=`date +%Y_%m_%d_%H%M`
backFileName=vueBlog_$date_now

cd $backUpFolder
mkdir -p $backFileName

mongodump -h 127.0.0.1:19999 -d vueBlog -u fayin_blog -p fayin_blog@39.108 -o $backFileName

tar zcvf $backFileName.tar.gz $backFileName

rm -rf $backFileName

````
回到根目录，创建/home/fayin/backup/vueBlog后，执行脚本

````
mkdir backup

cd backup

mkdir vueBlog

cd

sudo sh ./tasks/vueBlog.sh

````
### 系统定时任务脚本

`crontab -e`启动系统定时任务，选择2，开始编写脚本：

`28 00 * * * sh /home/fayin/tasks/vueBlog.sh`

ctrl + s

shift + y

enter

保存






