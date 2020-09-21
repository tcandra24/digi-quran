import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/surah/:id',
    name: 'Surah',
    component: () => import('../views/Surah.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from) {
  //   if(to.fullPath === '/' && from.fullPath.includes('surah')){
  //     console.log(to)
  //     // console.log(from)
  //     // console.log('hello')
  //     // let scrollPosition = document.documentElement.scrollTop + window.innerHeight
  //     // console.log(scrollPosition)
  //     // return { x: 0, y: 0 }
  //   }
  // }
})

export default router
