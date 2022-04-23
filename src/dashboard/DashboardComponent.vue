<template>
  <section class="user-dashboard">
    <side-bar></side-bar>
    <h1>User Dashboard</h1>
  </section>
</template>

<script>
import SideBar from "./SideBar.vue";

export default {
  name: "DashboardComponent",
  components: [
    SideBar,
  ],
};
</script>

<style>
</style>
