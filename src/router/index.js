import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/addNote',
    name: 'AddNote',
    component: AddNote
  },
  {
    path: '/editNote',
    name: 'EditNote',
    component: EditNote
  },
  {
    path: '/listNote',
    name: 'listNote',
    component: ListNote
  },
  {
    path: '/addCategory',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/editCategory',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/listCategories',
    name: 'ListCategories',
    component: ListCategories
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgotPswd',
    name: 'ForgotPswd',
    component: ForgotPswd
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
