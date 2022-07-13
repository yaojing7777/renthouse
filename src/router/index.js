import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const My = () => import('@/views/My')
const Find = () => import('@/views/Find')
const News = () => import('@/views/News')
const Login = () => import('@/views/Login')
const List = () => import('@/views/List')
const City = () => import('@/views/City')
const Renthouse = () => import('@/views/Renthouse')
const Favority = () => import('@/views/Favirity')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'find', component: Find
      },
      {
        path: 'my', component: My, name: 'my'
      },
      {
        path: 'news', component: News
      }
    ]
  },
  {
    path: '/login', component: Login
  },
  {
    path: '/list', component: List
  },
  {
    path: '/city', component: City
  },
  {
    path: '/rent/add', component: Renthouse
  },
  {
    path: '/favorite', component: Favority
  }
]

const router = new VueRouter({
  routes
})

export default router
