import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/login'
import User from '../views/user/user'
import Roles from '../views/power/roles'
import Rights from '../views/power/rights'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/users',
        name: 'user',
        component: User
      },
      {
        path: '/roles',
        name: 'roles',
        component: Roles
      },
      {
        path: '/rights',
        name: 'rights',
        component: Rights
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const isToken = next => {
  let Token = JSON.parse(localStorage.getItem('userData')).token
  if (!Token) {
    return next('/login')
  }
  next()
}

//创建一个路由导航守卫
router.beforeEach((to, from, next) => {
  //to将要访问的路径
  //from代表从哪个路径跳转过来的
  //next()通过，next('/login')跳转到login
  switch (to.path) {
    case '/login':
      return next()
    default:
      isToken(next)
  }
})

export default router
