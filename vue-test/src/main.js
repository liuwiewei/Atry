// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import loading from './utils/loading'
import './utils/watcher'

Vue.config.productionTip = false

const eventBus = new Vue({})
Vue.prototype.eventBus = eventBus

Vue.use(loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
