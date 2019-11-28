<template>
  <div>
    <v-btn color="primary" class="my-4" @click="cancelAllBookings" :disabled="bookedApartments.length === 0">Cancel all bookings</v-btn>
    <apartment-card v-for="(eachApartment, key) in bookedApartments" :key="key" :apartment="eachApartment"></apartment-card>
  </div>
</template>

<script>

import ApartmentCard from "../components/ApartmentCard";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "my-bookings",
  components: {
    ApartmentCard
  },
  methods: {
    ...mapActions(["cancelAllBookings"])
  },
  computed: {
    bookedApartments() {
      if (this.returnApartments === null) return []

      return this.returnApartments.filter(item => item.booked)
    },
    ...mapGetters(["returnApartments"])
  }
};
</script>
