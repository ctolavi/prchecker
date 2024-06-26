// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify);
Vue.use(Vuex);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
