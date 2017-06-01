import Vue from 'vue'
import Router from 'vue-router'

// 视图页面
// import Index from '@/pages/index'
// import Blog from '@/pages/blog'
// import Project from '@/pages/project'
// import About from '@/pages/about'
// import List from '@/pages/list'


Vue.use(Router);

const Index = resolve => require(['@/pages/index'], resolve)
const Blog = resolve => require(['@/pages/blog'], resolve)
const Project = resolve => require(['@/pages/project'], resolve)
const About = resolve => require(['@/pages/list'], resolve)
const List = resolve => require(['@/pages/list'], resolve)

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

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
};

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [index, blog, project, about, list]
})
