import Vue from 'vue'
import VueRouter from 'vue-router'
import Agregar from './components/Agregar.vue'
import Listar from './components/Listar.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes : [
      { path: '/', redirect:'/agregar' },
      { path: '/agregar', component: Agregar },
      { path: '/listar', component: Listar },
  ]
})