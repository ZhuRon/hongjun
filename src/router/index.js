import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
// import Home from '@/pages/Home'
import HotList from '@/pages/HotList'
import Message from '@/pages/Message'
import Explain from '@/pages/Explain'
import HotEvaluate from '@/pages/HotEvaluate'
// const login = () => import('@/pages/login')
// 因为登入界面不常用所以用lazyload

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/HL',
          name: 'HotList',
          component: HotList
        },
        {
          path: '/MS',
          name: 'Message',
          component: Message
        },
        {
          path: '/EP',
          name: 'Explain',
          component: Explain
        },
        {
          path: '/HE',
          name: 'HotEvaluate',
          component: HotEvaluate
        }
      ]
    }
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // }
  ]
})