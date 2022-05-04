<template>
  <v-card class="side-panel">
    <v-subheader>The side-panel</v-subheader>
    <v-list>
      <template v-for="(tag, index) in tags">
        <v-list-item v-if="tag" :key="index">{{tag}}</v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({
    tags: [],
  }),
  mounted() {
    this.tags = ["I4G", "SSG", "StudentBuild"];
  },
};
</script>

<style>

</style>
