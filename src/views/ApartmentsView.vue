<template>
  <div class="apparments-list my-2">
    <v-chip-group active-class="primary" mandatory>
      <v-chip @click="toggleView(1)"><i class="fas fa-table mr-2"></i> Card</v-chip>
      <v-chip @click="toggleView(2)"><i class="fas fa-list mr-2"></i> List</v-chip>
    </v-chip-group>

    <template v-if="currentView === 1">
      <apartment-list :data="returnApartments"></apartment-list>
    </template>
    <template v-else>
      <apartment-table :data="returnApartments"></apartment-table>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ApartmentList from "../components/ApartmentList";
import ApartmentTable from "../components/ApartmentTable";

export default {
  name: "apartments-list",
  components: {
    ApartmentList,
    ApartmentTable
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
