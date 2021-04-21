import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Catalog from '../views/catalog.vue'
import Person from '../views/person.vue'
import BlogDetail from '../views/BlogDetail.vue'
// import Test from '../views/Test.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/blogdetail',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/about',
      name: 'About',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/:blogId',
      name: 'BlogDetail',
      component: BlogDetail
    }
  ]
})

export default router