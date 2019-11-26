<template>
  <v-app-bar flat="flat" color="deep-purple accent-5" dark app>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text @click="goToPath('/')"
        ><i class="fas fa-building mr-2"></i>Apartments List
      </v-btn>
      <v-btn text @click="goToPath('/mybookings')"
        ><i class="fas fa-bookmark mr-2"></i>My Bookings
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "tool-bar",
  methods: {
    goToPath(path) {
      this.$router.push({ path: path }).catch(() => {});
    }
  }
};
</script>
