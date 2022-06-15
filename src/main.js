import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);



import VueRouter from "vue-router";

import Home from "./components/Home/Home"
import Medicines from "./components/Medicines/Medicines";
import LabTest from './components/LabTest/LabTest'
import Acne from "././components/Medicines/Acne"

Vue.use(VueRouter);


const routes = [
  { path: "/", component: Home },
  { path: "/medicines", component: Medicines },
  { path: "/medicines/acne", component: Acne },
  { path: "/labtest", component: LabTest },
];


const router = new VueRouter({
  routes
})

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
