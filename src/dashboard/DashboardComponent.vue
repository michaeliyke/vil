<template>
  <v-container class="user-dashboard">
    <v-row>
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
        <mobile-tray
          :trays="trays"
          :trayName="trayName"
          :notify="notify"
          :keep="keep"
        />
        <v-card class="text-center py-3" color="rgba(255, 255, 255, 0.1)">
          <v-btn
            v-for="(t, index) of trays"
            :key="index"
            :class="t.classes"
            small
            fab
            dark
            :color="t.color"
            data-role="tray"
            @click="t.clickHandler"
          >
            <v-icon dark> {{ t.icon }} </v-icon>
          </v-btn>
        </v-card>
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

// eslint-disable-next-line no-unused-vars
const { log, log: l } = console;

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
      keep: false,
      trayName: "",
      trays: [
        {
          name: "categories",
          icon: "mdi-bookmark-multiple",
          color: "indigo",
          classes: "mx-2",
          clickHandler: this.categories,
        },
        {
          name: "tags",
          icon: "mdi-tag-multiple",
          color: "teal",
          classes: "mx-2",
          clickHandler: this.tags,
        },
        {
          name: "write",
          icon: "mdi-send",
          color: "cyan",
          classes: "mx-2",
          clickHandler: this.write,
        },
      ],
    };
  },
  methods: {
    notify() {
      this.trayName = "";
    },

    getBTN(t) {
      if (!(t instanceof HTMLElement)) throw new Error(`invalid target ${t}`);
      if (t.dataset.role === "tray") return t;
      if (t.parentNode instanceof HTMLElement) {
        if (t.parentNode.dataset.role === "tray") return t.parentNode;
      }
      return null;
    },

    setTray(tag) {
      this.keep = false;
      if (this.trayName === tag) {
        this.trayName = "";
        return;
      }

      if (this.trayName !== "") {
        this.keep = true;
      }
      this.trayName = tag;
    },

    categories() {
      this.setTray("categories");
    },

    tags() {
      this.setTray("tags");
    },

    write() {
      this.setTray("write");
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
