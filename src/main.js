import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'

import '@/plugins/elementui.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.less'

Vue.config.productionTip = false
Vue.use(ScrollFixedHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
