<template>
  <v-app>
    <tool-bar></tool-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import ToolBar from "./components/ToolBar";

export default {
  name: "App",
  components: {
    ToolBar
  },
  created() {
    this.getApartments();
  },
  methods: {
    ...mapActions(["getApartments"])
  },
};
</script>
