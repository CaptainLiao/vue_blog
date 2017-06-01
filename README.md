# vue + elementUI + node + express + mongoDB 实现blog系统

项目开始时间：2017-5-4

我有一个宏伟的目标，志在通过构建个人博客，系统的了解学习前后端的工作，包括但不限于页面布局、数据渲染、
数据存储、项目部署......

将通过 issue 来记录学习和构建的过程。

## 前端实现：vue + elementUI

前端项目启动：

1.  git clone https://github.com/CaptainLiao/vue_blog.git
2.  cd blog
3.  npm install
4.  npm run dev
5.  在浏览器地址栏键入：http://localhost:5555

## 后端实现：node + express + mongoDB

后台项目启动：
1.  git clone https://github.com/CaptainLiao/vue_blog.git
2.  cd blog_end
3.  npm install
4.  新开一个CMD开启数据库：mongod --dbpath d:/MongoDB/data
5.  set DEBUG=blog_end & npm start
6.  在浏览器地址栏键入：http://localhost:5000

pm2 部署

`pm2 deploy ecosystem.json production setup`
