import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';// npm i -D axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios;
import Qs from 'qs'; // 引用 qs 模块；
Vue.prototype.qs = Qs;
Vue.config.productionTip = false
Vue.use(ElementUI)

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 显示加载中....的动画
  // elLaoding = ElementUI.Loading.service({fullscreen:true});

  // console.log(sessionStorage.getItem('token'))
  if(sessionStorage.getItem('token')){
    // console.log(sessionStorage.getItem('token'))
    axios.defaults.headers.common['authenticate'] = sessionStorage.getItem('token');
  }

  // console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //隐藏加载的动画 ；
  // elLaoding.close();
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
