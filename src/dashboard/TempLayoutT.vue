/* eslint-disable no-useless-return */
<template>
  <div>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
        persistent
        :width="tray.width(trayName)"
      >
        <v-card tile>
          <!-- tool-bar starts -->
          <v-toolbar flat dark color="primary">
            <v-toolbar-title>
              <h2>{{ trayName }}</h2>
            </v-toolbar-title>
          </v-toolbar>
          <!-- tool-bar ends -->

          <v-card-text v-if="trayName === 'categories'">
            <v-list>
              <v-list-item v-for="(category, index) of categories" :key="index">
                <v-list-item-icon>{{ index }}</v-list-item-icon>
                <v-list-item-content>{{ category }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-card-text v-if="trayName === 'tags'">
            <v-list>
              <v-list-item v-for="(tag, index) of tags" :key="index">
                <v-list-item-icon>{{ index }}</v-list-item-icon>
                <v-list-item-content>{{ tag }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-card-text v-if="trayName === 'write'">
            <mobile-write />
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import MobileWrite from "@/dashboard/MobileWrite.vue";
// eslint-disable-next-line no-unused-vars
const { log, log: l } = console;

export default {
  name: "TempLayout",
  components: {
    MobileWrite,
  },
  data: () => ({
    dialog: false,
    tags: ["Fear", "Courage", "Forge", "Career", "Hobby", "Education"],
    categories: ["Art", "Science", "Technology", "Wisdom", "Human", "Bush"],
    tray: {
      width(trayName) {
        if (trayName === "write") return "80%";
        return "60%";
      },
    },
  }),
  props: {
    keep: Boolean,
    notify: {
      type: Function,
      required: true,
      validator(fn) {
        return typeof fn === "function";
      },
    },
    trayName: {
      default: "",
      type: String,
      required: true,
      validator(str) {
        return ["categories", "tags", "write", "", "keep"].includes(str);
      },
    },
  },
  watch: {
    trayName: {
      immediate: true,
      handler() {
        if (this.keep) return;
        if (this.trayName === "keep") return;
        this.dialog = this.trayName !== "";
      },
    },
    dialog: {
      handler() {
        if (this.dialog === true) return;
        if (this.trayName !== "") this.notify();
      },
    },
  },
};
</script>

<style>
.v-dialog__content {
  height: auto !important;
  bottom: 3em !important;
  align-items: flex-end !important;
}
.v-dialog {
  box-shadow: 0px -11px 15px -7px rgb(0 0 0 / 20%),
    0px -24px 38px 3px rgb(0 0 0 / 14%), 0px -9px 46px 8px rgb(0 0 0 / 12%) !important;
}
</style>
