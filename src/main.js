import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ToastPlugin from 'vue-toast-notification';
// import { initializeApp } from "firebase/app";


// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(ToastPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// const firebaseConfig = {
//   apiKey: "AIzaSyBIDBauPRR6jDeIgV89sGTL9Eqrcib-VFI",
//   authDomain: "elfsvue.firebaseapp.com",
//   projectId: "elfsvue",
//   storageBucket: "elfsvue.appspot.com",
//   messagingSenderId: "436460836184",
//   appId: "1:436460836184:web:e5f47661b926a209f3412d"
// };

// const app = initializeApp(firebaseConfig);
