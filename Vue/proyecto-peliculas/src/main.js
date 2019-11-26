import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ContentComponent from './components/ContentComponent.vue';
import InfoMovie from './components/InfoMovie.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: ContentComponent},
  {path: '/movie/:id', component: InfoMovie},
  {path: '/', component: ContentComponent}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
