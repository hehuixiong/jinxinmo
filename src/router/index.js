import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /** 首页 */
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue')
  },
  /** 应用领域 */
  {
    path: '/apply',
    name: 'apply',
    component: () => import(/* webpackChunkName: "apply" */ '../views/apply/apply.vue')
  },
  /** 联系我们 */
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact/contact.vue')
  },
  /** 膜材介绍 */
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import(/* webpackChunkName: "introduce" */ '../views/introduce/introduce.vue')
  },
  /** 服务能力 */
  {
    path: '/serves',
    name: 'serves',
    component: () => import(/* webpackChunkName: "serves" */ '../views/serves/serves.vue')
  },
  /** 新闻中心 */
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/news/news.vue')
  },
  /** 解决方案 */
  {
    path: '/solution',
    name: 'solution',
    component: () => import(/* webpackChunkName: "solution" */ '../views/solution/solution.vue')
  },
  /** 关于金鑫 */
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/about.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
