<template>
  <v-card class="text-center py-1" color="rgba(255, 255, 255, 0.1)">
    <v-row justify="center">
      <v-menu
        min-width="67%"
        tile
        v-for="(t, index) of trays"
        :key="index"
        transition="slide-x-transition"
        right
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            :color="t.color"
            :class="t.classes"
            :name="t.name"
            :ref="t.name"
            small
            dark
            fab
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark> {{ t.icon }} </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="item in items" :key="item" link>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "MobileTray",
  computed: {
    tray() {
      return ["categories", "tags", "write"].includes(this.trayName);
    },
  },
  props: {
    trayName: String,
    trays: Array,
  },
  methods: {},
  data: () => ({
    items: [...Array(4)].map((a, b) => `Item number ${b}`),
  }),
};
</script>

<style>
</style>
