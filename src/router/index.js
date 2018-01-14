import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Main from '@/pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '主页', component: Home },
    { path: '/home', name: '主页', component: Home },
    { path: '/main', name: '主页', component: Main },

  ]
})
