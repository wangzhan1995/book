
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 公共页面的路由文件
import Login from '../views/Login.vue'
import HOME from './modules/home'
import WZ from './modules/wangzhan'

// 投票模块的路由文件


// 定义路由
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login,
      meta:{
        title:'登录'
      }
    },
    ...HOME,
    ...WZ,

  ]
})

// 路由变化时
router.beforeEach((to, from, next) => {
  if (document.title !== to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

// 导出
export default router
