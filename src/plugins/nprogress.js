import router from '../router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { title } from '../../config/env.js'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | 深圳市金鑫膜结构设计院- 专业膜结构设计-大跨度结构设计`
  } else {
    document.title = title
  }
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
