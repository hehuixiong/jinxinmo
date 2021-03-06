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
    component: () => import(/* webpackChunkName: "apply" */ '../views/apply/apply.vue'),
    meta: {
      title: '应用领域',
      parentPath: '/apply'
    }
  },
  /** 联系我们 */
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact/contact.vue'),
    meta: {
      title: '联系我们',
      parentPath: '/contact'
    }
  },
  /** 膜材介绍 */
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import(/* webpackChunkName: "introduce" */ '../views/introduce/introduce.vue'),
    meta: {
      title: '膜材介绍',
      parentPath: '/introduce'
    }
  },
  /** 服务能力 */
  {
    path: '/serves',
    name: 'serves',
    component: () => import(/* webpackChunkName: "serves" */ '../views/serves/serves.vue'),
    meta: {
      title: '服务能力',
      parentPath: '/serves'
    }
  },
  /** 新闻中心 */
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/news/news.vue'),
    meta: {
      title: '新闻中心',
      parentPath: '/news'
    }
  },
  /** 新闻详情 */
  {
    path: '/news-details',
    name: 'newsDetails',
    component: () => import(/* webpackChunkName: "newsDetails" */ '../views/news/details.vue'),
    meta: {
      title: '新闻中心',
      parentPath: '/news'
    }
  },
  /** 解决方案 */
  {
    path: '/solution',
    name: 'solution',
    component: () => import(/* webpackChunkName: "solution" */ '../views/solution/solution.vue'),
    meta: {
      title: '解决方案',
      parentPath: '/solution'
    }
  },
  /** 关于金鑫 */
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/about.vue'),
    meta: {
      title: '关于金鑫',
      parentPath: '/about'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    document.documentElement.scrollTop = window.pageYOffset = document.body.scrollTop = 0
    return { x: 0, y: 0 }
  }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
