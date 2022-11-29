import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CaraBeli from '../components/FooterDetail/CaraBeli.vue'
import PanduanUkuran from '../components/FooterDetail/PanduanUkuran.vue'
import Retur from '../components/FooterDetail/Retur.vue'
import DetailProduct from '../views/DetailProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView,
  },
  {
    path: '/carabeli',
    name: 'carabeli',
    component: CaraBeli,
  }, 
  {
    path: '/panduanukuran',
    name: 'PanduanUkuran',
    component: PanduanUkuran,
  }, 
  {
    path: '/retur',
    name: 'retur',
    component: Retur,
  }, 
  {
    path: '/product/:id',
    name: 'DetailProduct',
    component: DetailProduct,
  }, 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
