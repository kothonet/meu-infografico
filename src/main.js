import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueFirestore from 'vue-firestore';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;
Vue.use(VueFirestore);
Vue.use(VueAnalytics, {
  id: 'UA-127982832-1',
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
