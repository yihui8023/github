 import Vue from 'vue'
 import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Zhihu from '@/components/Zhihu'
import Suoyin from '@/components/Suoyin'
import Jinghua from '@/components/Jinghua'
import Stop from '@/components/Stop'
import Zhuce from '@/components/Zhuce'
import Shipin from '@/components/Shipin'
Vue.use(Router)
export default new Router({
  routes: [
    {
    path: '/Index',
    name: 'Index',
    component: Index,
    children:[
  {
    path: '/Zhihu',
    component: Zhihu
  },{
    path: '/Suoyin',
    component: Suoyin
  },{
    path: '/Jinghua',
    component: Jinghua
  },{
    path: '/Stop',
    component: Stop
  },
    ]
      },
      {
        path: '/Zhuce',
        component: Zhuce
      },
      {
        path: '/Shipin',
        component: Shipin
      },
      {
        path:'*',
        redirect:'/Zhuce'
      }
    ]   
})
