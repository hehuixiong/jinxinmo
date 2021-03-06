import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/plugins/element-ui.js'
import '@/plugins/nprogress.js'
import '@/assets/scss/index.scss'

Vue.config.productionTip = false
// 测试*******************
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
