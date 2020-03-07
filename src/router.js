import Vue from 'vue'
import Router from 'vue-router'
import HirarchialEdgeBundling from './components/HirarchialEdgeBundling.vue'

Vue.use(Router)

export default new Router({
  routes: [
   
    
    {
      path: '/HirarchialEdgeBundling',
      name: 'HirarchialEdgeBundling',
      component: HirarchialEdgeBundling
    }
  ]
})

