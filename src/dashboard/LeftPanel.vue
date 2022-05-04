<template>
  <v-card class="side-panel">
    <v-subheader>Categories</v-subheader>
    <v-list>
      <template v-for="(category, index) in categories">
        <v-list-item v-if="category" :key="index">{{category}}</v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "SidePanel",
  data: () => ({
    categories: [],
  }),
  mounted() {
    this.categories = ["Internship", "Training", "Mentored", "Training"];
    this.displayCategories();
  },
  methods: {
    displayCategories() {},
  },
};
</script>

<style>

</style>
