// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import axios from 'axios'
import config from './config'

// 引入外部css
import './assets/less/reset.less'
import './assets/less/global.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/less/main.less'

Vue.use(ElementUI);
Vue.prototype.request = axios;
Vue.prototype.config = config;

Vue.config.productionTip = false;

// 注册全局组件
import Header from '@/components/header'
import Footer from '@/components/footer'
Vue.component('blog-header', Header);
Vue.component('blog-footer', Footer);



/* eslint-disable no-new */
new Vue({

  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
