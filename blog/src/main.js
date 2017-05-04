// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'

// 引入外部css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 注册全局组件
import Header from '@/components/header'
Vue.component('blog-header', Header);



/* eslint-disable no-new */
new Vue({

  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
