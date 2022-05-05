<template>
  <v-container class="user-dashboard" @click="hideTray" @keydown.esc="hideTray">
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
        <mobile-tray :trayName="trayName" />
        <v-card class="text-center py-1" color="rgba(255, 255, 255, 0.1)">
          <v-btn
            v-for="(t, index) of trays"
            :key="index"
            :class="t.classes"
            :name="t.name"
            :ref="t.name"
            small
            fab
            dark
            :color="t.color"
            @click="toggleTray(t.name)"
          >
            <v-icon dark> {{ t.icon }} </v-icon>
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
import MobileTray from "./MobileTray.vue";

export default {
  name: "DashboardComponent",
  components: {
    LeftPanel,
    // MiddlePanel,
    RightPanel,
    TemPanel,
    MobileTray,
  },
  data() {
    return {
      text: "center",
      icon: "justify",
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
      trayName: "",
      trays: [
        {
          name: "categories",
          icon: "mdi-bookmark-multiple",
          color: "indigo",
          classes: "mx-2",
        },
        {
          name: "tags",
          icon: "mdi-tag-multiple",
          color: "teal",
          classes: "mx-2",
        },
        {
          name: "write",
          icon: "mdi-send",
          color: "cyan",
          classes: "mx-2",
        },
      ],
    };
  },
  methods: {
    toggleTray(name) {
      this.trayName = this.trayName === name ? "" : name;
    },
    hideTray(event) {
      if (this.hasClass(event.target, "mdi") === false) {
        this.trayName = "";
      }
    },
    hasClass(element, className) {
      return element.classList.contains(className);
    },
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
