<template>
  <v-container class="user-dashboard">
    <v-row class="">
      <v-col class="cyan lighten-4 hidden-xs-only col-sm-3 col-md-3 col-lg-4">
        <left-panel></left-panel>
      </v-col>

      <v-col class="col-12 col-sm-7 col-md-6 col-lg-5">
        <tem-panel></tem-panel>
      </v-col>

      <v-col class="cyan lighten-4 hidden-xs-only col-sm-2 col-md-3 col-lg-3">
        <right-panel></right-panel>
      </v-col>

      <v-col class="hidden-sm-and-up col-12 fixed py-0 px-0">
        <v-card class="text-center py-1" color="rgba(255, 255, 255, 0.1)">
          <v-btn class="mx-2" small fab dark color="indigo">
            <!-- <v-icon dark> mdi-tag-multiple </v-icon> -->
            <v-icon dark> mdi-bookmark-multiple </v-icon>
          </v-btn>

          <v-btn class="mx-2" small fab dark color="teal">
            <v-icon dark> mdi-tag-multiple</v-icon>
          </v-btn>

          <v-btn class="mx-2" small fab dark color="cyan">
            <v-icon dark> mdi-send </v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LeftPanel from "./LeftPanel.vue";
// import MiddlePanel from "./MiddlePanel.vue";
import RightPanel from "./RightPanel.vue";
import TemPanel from "./TemPanel.vue";

export default {
  name: "DashboardComponent",
  components: {
    LeftPanel,
    // MiddlePanel,
    RightPanel,
    TemPanel,
  },
  data() {
    return {
      text: "center",
      icon: "justify",
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
    };
  },
};
</script>

<style>
.fixed {
  position: fixed;
  bottom: 0;
  margin-right: auto;
  margin-left: auto;
}
</style>
