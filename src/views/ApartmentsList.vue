<template>
  <div class="apparments-list my-6">
    <v-chip-group active-class="primary" mandatory class="view-switch">
      <v-chip @click="toggleView(1)"><i class="fas fa-table mr-2"></i> Card</v-chip>
      <v-chip @click="toggleView(2)"><i class="fas fa-list mr-2"></i> List</v-chip>
    </v-chip-group>
    <template v-if="currentView === 1">
      <apartment-card
        v-for="(eachApartment, key) in returnApartments"
        :key="key"
        :apartment="eachApartment"
      >
      </apartment-card>
    </template>
    <template v-else>

    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ApartmentCard from "../components/ApartmentCard";

export default {
  name: "apartments-list",
  components: {
    ApartmentCard
  },
  data() {
    return {
      currentView: 1
    }
  },
  methods: {
    toggleView(value) {
      this.currentView = value
    }
  },
  computed: {
    ...mapGetters(["returnApartments"])
  }
};
</script>
