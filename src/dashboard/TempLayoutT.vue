/* eslint-disable no-useless-return */
<template>
  <div>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
        :persistent="trayName !== 'categories'"
      >
        <v-card tile>
          <!-- tool-bar starts -->
          <v-toolbar flat dark color="primary">
            <v-toolbar-title>Settings</v-toolbar-title>
          </v-toolbar>
          <!-- tool-bar ends -->

          <v-card-text>
            <h1 class="pa-4" v-if="trayName === 'categories'">Categorizing</h1>
            <h1 class="pa-4" v-if="trayName === 'tags'">Tagging</h1>
            <h1 class="pa-4" v-if="trayName === 'write'">Writing</h1>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const { log, log: l } = console;

export default {
  name: "TempLayout",
  data: () => ({
    dialog: false,
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
  bottom: 1em !important;
  align-items: flex-end !important;
}
.v-dialog {
  box-shadow: 0px -11px 15px -7px rgb(0 0 0 / 20%),
    0px -24px 38px 3px rgb(0 0 0 / 14%), 0px -9px 46px 8px rgb(0 0 0 / 12%) !important;
}
</style>
