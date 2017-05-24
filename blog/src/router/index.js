import Vue from 'vue'
import Router from 'vue-router'

// 视图页面
import Index from '@/pages/index'
import Blog from '@/pages/blog'
import Project from '@/pages/project'
import About from '@/pages/about'
import List from '@/pages/list'


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


let list = {
  path: '/blog/list',
  name: 'List',
  component: List
};

let project = {
  path: '/project',
  name: 'Project',
  component: Project
};

let about = {
  path: '/about',
  name: 'About',
  component: About
};

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [index, blog, project, about, list]
})
