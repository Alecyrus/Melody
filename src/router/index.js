import Vue from 'vue'
import Router from 'vue-router'

//components
import Login from '@/components/Login'
import Overview from '@/components/Overview'
import Domain from '@/components/Domain'
import User from '@/components/User'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/:username',
      name: 'User',
      component: User,
      children: [
        {
          path: 'overview',
          component: Overview
        },
        {
          path: 'domains',
          component: Domain
        },
        {
          path: 'hosts',
          component: Overview
        },
        {
          path: 'groups',
          component: Overview
        },
        {
          path: 'networks',
          component: Overview
        },
        {
          path: 'storage',
          component: Overview
        },
        {
          path: 'flavors',
          component: Overview
        },
        {
          path: 'images',
          component: Overview
        },
        {
          path: 'overview',
          component: Overview
        },
        {
          path: 'quotas',
          component: Overview
        },
        {
          path: 'account',
          component: Overview
        },
        {
          path: 'premissions',
          component: Overview
        },
        {
          path: 'logs',
          component: Overview
        },
        {
          path: 'userinfo',
          component: UserInfo
        },
        {
          path: 'settings',
          component: Overview
        }
      ]
    }
  ]
})
