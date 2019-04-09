import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import platformVar from 'platformsh_variables'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// Get Drupal API URL from Platform.sh variables.
let entrypoint = Object.keys(platformVar).find(url => url.startsWith('https://api.'))

if (entrypoint) {
  Vue.http.options.root = entrypoint.substring(0, entrypoint.length)
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
