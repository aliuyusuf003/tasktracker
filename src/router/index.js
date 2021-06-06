import {createRouter,createWebHistory} from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'

const routes =[
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router