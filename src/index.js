import Vue from 'vue';
import router from './Router'
import store from './store/index'
import App from './views/App.vue';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
