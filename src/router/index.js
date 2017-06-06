import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Forgot from '@/components/Forgot'
import Register from '@/components/Register'
import Home from '@/components/Home'
import editDetails from '@/components/editDetails'
import MyFeedback from '@/components/MyFeedback'
import CreateFeedback from '@/components/CreateFeedback'
import ChangePassword from '@/components/ChangePassword'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/en'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

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
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/changepassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/editDetails',
      name: 'editDetails',
      component: editDetails
    },
    {
      path: '/MyFeedback',
      name: 'MyFeedback',
      component: MyFeedback
    },
    {
      path: '/CreateFeedback',
      name: 'CreateFeedback',
      component: CreateFeedback
    }
  ]
})
