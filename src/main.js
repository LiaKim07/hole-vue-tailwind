import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebookSquare, faInstagramSquare);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import "./assets/app.scss";

Vue.config.productionTip = false;

import SwiperClass, {
  Navigation,
  Pagination /* add some modules if you need */,
} from "swiper";

SwiperClass.use([Navigation, Pagination]);
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
