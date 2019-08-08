import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import MaterialDashboard from "./material-dashboard";
import VueRouter from 'vue-router'
import { routes } from './routes/routes'
import _ from 'lodash'
import Auth from "./repository/Auth"


Vue.use(VueRouter);
Vue.use(VueMaterial);
import App from './App.vue'

Vue.use(MaterialDashboard);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: "nav-item active"
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (window.localStorage.getItem("token") == null) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
