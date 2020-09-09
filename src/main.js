import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import firebase from './firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Uses
Vue.use(Buefy);
Vue.use(firebase);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
