// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import utils from '@/utils'
import toast from '@/components/toast'

import http from '@/utils/http.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.scss'
import '@/assets/css/toast.css'

// import toast from './components/toast'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(http)
Vue.use(utils)
Vue.use(toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
