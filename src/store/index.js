import Vue from "vue";
import Vuex from "vuex";
import ApiService from "../service/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apartments: null,
    autocomplete: {
      city: [],
      country: [],
      rating: ["low to high", "high to low"],
      price: ["low to high", "high to low"]
    }
  },
  mutations: {
    setApartments(state, payload) {
      let city = [],
        country = [];

      for (let i = 0; i < payload.length; i++) {
        city.push(payload[i].city);
        country.push(payload[i].country);

        Object.assign(payload[i], { booked: false });
      }

      state.autocomplete.city = city;
      state.autocomplete.country = country;
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
    },
    returnAutocomplete(state) {
      return state.autocomplete;
    }
  }
});
