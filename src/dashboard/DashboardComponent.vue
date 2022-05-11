<template>
  <v-container class="user-dashboard" @click="hideAll" @keydown.esc="hideAll">
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
        <mobile-tray :trays="trays" :trayName="trayName" :dialog="dialog" />
        <v-btn
          color="primary"
          class="ma-2"
          id="xyz"
          ref="xyz"
          dark
          @click="dialog = !dialog"
          >Button</v-btn
        >
        <v-btn role="btn-1" data-set="given">Button</v-btn>
        <v-btn role="btn-2" data-set="given">Button</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LeftPanel from "@/dashboard/LeftPanel.vue";
// import MiddlePanel from "./MiddlePanel.vue";
import RightPanel from "@/dashboard/RightPanel.vue";
import TemPanel from "@/dashboard/TemPanel.vue";
// import MobileTray from "./MobileTray.vue";
import MobileTray from "@/dashboard/TempLayoutT.vue";

//  ref=xyz, id=xyz => console.log(this.$refs.xyz.$el.id);

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
      dialog: false,
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
    hideAll(event) {
      this.hideTray(event);
      this.toggleDialog(event);
    },
    toggleDialog(event) {
      if (this.dialog && !this.isBtn(event.target)) {
        this.dialog = false;
      }
    },

    isBtn(target) {
      return [target, target.parentNode].some((x) => x.id === "xyz");
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
