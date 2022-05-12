/* eslint-disable no-useless-return */
<template>
  <div>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <!-- tool-bar starts -->
          <v-toolbar flat dark color="primary">
            <v-btn>
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text> Save </v-btn>
            </v-toolbar-items>
            <v-menu bottom right offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                  open
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Click me</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <!-- tool-bar ends -->

          <v-card-text>
            <v-list three-line subheader>
              <v-subheader>User Controls</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle>
                    Set the content filtering level to restrict apps that can be
                    downloaded
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle>
                    Require password for purchase or use password to restrict
                    purchase
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
          </v-card-text>

          <!-- <div style="flex: 1 1 auto"></div> -->
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
        return ["categories", "tags", "write", ""].includes(str);
      },
    },
  },
  watch: {
    trayName: {
      immediate: true,
      handler() {
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
