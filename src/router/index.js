import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import BajuView from '../views/BajuView.vue'
import CelanaView from '../views/CelanaView.vue'
import TasView from '../views/TasView.vue'
import KaoskakiView from '../views/KaoskakiView.vue'
import TopiView from '../views/TopiView.vue'
import AksesorisView from '../views/AksesorisView'
import SearchView from '../views/SearchView'
import Register from '../views/Register.vue'
import CaraBeli from '../components/FooterDetail/CaraBeli.vue'
import PanduanUkuran from '../components/FooterDetail/PanduanUkuran.vue'
import Retur from '../components/FooterDetail/Retur.vue'
import Faq from '../components/FooterDetail/Faq.vue'
import NewsLetter from '../components/FooterDetail/NewsLetter.vue'
import DetailProduct from '../views/DetailProduct.vue'
import Bayar from '../views/Bayar.vue'
import ProsesBayar from '../views/ProsesBayar.vue'

Vue.use(VueRouter)
const mode = 'history';
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
    path: '/faq',
    name: 'Faq',
    component: Faq,
  }, 
  {
    path: '/newsletter',
    name: 'NewsLetter',
    component: NewsLetter,
  }, 
  {
    path: '/register',
    name: 'Register',
    component: Register,
  }, 
  {
    path: '/product/:id',
    name: 'DetailProduct',
    component: DetailProduct,
  }, 
  {
    path: '/bajuview',
    name: 'BajuView',
    component: BajuView,
  }, 
  {
    path : '/celanaview',
    name : 'CelanaView',
    component : CelanaView,
  },
  {
    path : '/tasview',
    name : 'TasView',
    component : TasView,
  },
  {
    path : '/kaoskakiview',
    name : 'KaoskakiView',
    component : KaoskakiView
  },
  {
    path : '/topiview',
    name : 'TopiView',
    component : TopiView
  },
  {
    path : '/aksesorisview',
    name : 'AksesorisView',
    component : AksesorisView
  },
  {
    path : '/searchview',
    name : 'SearchView',
    component : SearchView
  },
  {
    path: '/bayar',
    name: 'bayar',
    component: Bayar
  },
  {
    path: '/prosesbayar',
    name: 'ProsesBayar',
    component: ProsesBayar
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
  routes,
  mode
})

export default router
