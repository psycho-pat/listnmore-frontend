import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListCreator from '../components/ListCreator.vue'
import ListOptions from '../components/ListOptions.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Account from '../components/Account.vue'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   meta: { requiresAuth: true},
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/ListCreator',
    name: 'ListCreator',
    component: ListCreator
  },
  {
    path: '/ListOptions',
    name: 'ListOptions',
    component: ListOptions
  },
  { 
    path: '*', 
    redirect: '/' 
  }
]

const router = new VueRouter({
  routes
})

//router.beforeEach((to, from, next) => {})


export default router