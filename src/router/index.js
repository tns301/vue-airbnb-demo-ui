import Vue from "vue";
import VueRouter from "vue-router";

import ApartmentsList from "../views/ApartmentsList.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: ApartmentsList
    },
    {
      path: "/mybookings",
      name: "mybookings",
      component: () => import("../views/MyBookings.vue")
    }
  ]
});
