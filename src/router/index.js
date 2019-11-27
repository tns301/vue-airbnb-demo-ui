import Vue from "vue";
import VueRouter from "vue-router";

import ApartmentsView from "../views/ApartmentsView.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: ApartmentsView
    },
    {
      path: "/mybookings",
      name: "mybookings",
      component: () => import("../views/MyBookings.vue")
    }
  ]
});
