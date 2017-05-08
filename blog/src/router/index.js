import Vue from 'vue'
import Router from 'vue-router'

// 视图页面
import Index from '@/pages/index'
import Blog from '@/pages/blog'


Vue.use(Router);

let index = {
  path: '/',
  name: 'Index',  // 组件别名
  component: Index
};

let blog = {
  path: '/blog',
  name: 'Blog',
  component: Blog
};


export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [index, blog]
})
