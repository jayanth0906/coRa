import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HirarchialEdgeBundling from './components/HirarchialEdgeBundling.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);
 
  const routes = [
    { path:'/HirarchialEdgeBundling', component:  HirarchialEdgeBundling },
    { path:'/', component:  Home}

];

const router = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
