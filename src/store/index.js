import Vue from "vue";
import Vuex from "vuex";
import ApiService from "../service/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apartments: null
  },
  mutations: {
    setApartments(state, payload) {
      state.apartments = payload;
    }
  },
  actions: {
    getApartments(context) {
      return new Promise((resolve, reject) => {
        ApiService.get(
          "https://jsonstorage.net/api/items/7fcd8f43-5a9c-4718-bd42-b9acadd64162"
        )
          .then(response => {
            context.commit("setApartments", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  getters: {
    returnApartments(state) {
      return state.apartments;
    }
  }
});
