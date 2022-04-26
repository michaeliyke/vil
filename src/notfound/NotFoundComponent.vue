<template>
  <section class="not-found">
    <h1>This Page could not be found</h1>
  </section>
</template>

<script>

const log = function log(x) {
  const b = "\n ";
  console.log(b, x, b);
};

export default {
  name: "NotFoundComponent",
  data() {
    return {};
  },
  methods: {
    location() {
      console.log(`\nThis Location is: ${this.$route}\n`);
      return this.$route;
    },
  },
  mounted() {
    log("MOUNTED", this.$routes);
  },
};
</script>

<style>

</style>
