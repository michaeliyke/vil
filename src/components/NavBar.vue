<template>
    <v-app-bar app color="white" flat class="grey lighten-3">
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32" ></v-avatar>
        <v-btn v-for="link in links" :key="link" text>{{ link }}</v-btn>
        <v-spacer></v-spacer>
        <v-responsive max-width="260" v-if="isDashboard" class="d-none d-md-block">
          <v-text-field dense flat hide-details rounded solo-inverted>
          </v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    links: ["Links", "Notes", "Accounts", "Files"],
  }),
  mounted() {
    // console.log(this.$route.name);
  },
  computed: {
    rute() {
      return this.$route;
    },
    isDashboard() {
      return this.$route.name === "UserDashboard";
    },
  },
};
</script>
