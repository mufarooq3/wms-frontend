import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import MaterialDashboard from "./material-dashboard";
import VueRouter from 'vue-router'
import { routes } from './routes/routes'


Vue.use(VueRouter);
Vue.use(VueMaterial)
import App from './App.vue'

Vue.use(MaterialDashboard);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: "nav-item active"
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
