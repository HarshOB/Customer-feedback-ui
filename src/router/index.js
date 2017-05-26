import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Forgot from '@/components/Forgot'
import Register from '@/components/Register'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/en'

Vue.use(Element)
Vue.use(Element, { locale })
locale.use(lang)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
