import Vue from 'vue'
import Router from 'vue-router'

// 视图页面
// import Index from '@/pages/index'
// import Blog from '@/pages/blog'
// import Project from '@/pages/project'
// import About from '@/pages/about'
// import List from '@/pages/list'


Vue.use(Router);

const Index = r => require.ensure([], () => r(require('../pages/index.vue')), 'Index')
const Blog = r => require.ensure([], () => r(require('../pages/blog.vue')), 'Blog')
const Project = r => require.ensure([], () => r(require('../pages/project.vue')), 'Project')
const About = r => require.ensure([], () => r(require('../pages/about.vue')), 'About')
const List = r => require.ensure([], () => r(require('../pages/list.vue')), 'List')

// const Index = resolve => {require.ensure(['../pages/index.vue'], () => {resolve(require('../pages/index.vue'))})}
// const Blog = resolve => {require.ensure(['../pages/blog.vue'], () => {resolve(require('../pages/blog.vue'))})}
// const Project = resolve => {require.ensure(['../pages/project.vue'], () => {resolve(require('../pages/project.vue'))})}
// const About = resolve => {require.ensure(['../pages/about.vue'], () => {resolve(require('../pages/about.vue'))})}
// const List = resolve => {require.ensure(['../pages/list.vue'], () => {resolve(require('../pages/list.vue'))})}


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
