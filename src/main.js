import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false;
Vue.use(VueFirestore);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
