<template>
  <v-sheet light color="white" class="blue-grey--text text--darken-3">

    <v-card-title class="display-1 title_">
      Welcome to <span class="vil-word">VIL</span>
    </v-card-title>
    <p class="info">
      Give me all your links, <span class="vil-word">VIL</span> says, and
    let me worry about them.
    When you need them, I'll be right behind!
    Never bother to remember those long strings anymore, ever!</p>

<section>
  <div class="mb-4 call">
    <v-btn @click="navigate()" elevation="2" class="user-login">Login</v-btn>
  </div>
  <v-divider light></v-divider>

  <footer class="intro">
    <v-card-title class="headline title_">what is
      <span class="vil-word"> VIL</span>?
      </v-card-title>
    <p class="info highlight">
      <span class="vil-word">VIL</span> aims to make our worklife easier by
    helping us to save
      time. It enables you to
easily save and organize your important links for later in a hassle-free manner.</p>
<p class="info">
  People keep including me keep a terrific amount of open tabs at once simply because
they don't want to lose their links. I once lost a link and later searched so hard to
find it all to no avail! It was painful to lose that important piece of information
just becuase I no longer have access to the link where it resides. This is where VPL
comes in. Simply move over and save them for free in an easily accessible manner and
move on. When you are ready, simply come back to VPL and continue from where you
stopped.
</p>

 <v-card-title class="headline title_">Where does it live?
    </v-card-title>
    <p class="info highlight">
      Our target with <span class="vil-word">VIL</span>
      is to work where you work. When <span class="vil-word">VIL</span> is fully
      functional, you'll find it in your browser, on your command line and in your
      mobile devices. A tool like  <span class="vil-word">VIL</span> must be both
      available and easy to use accross platforms in order to stay close enough to
      the user when they need it.
      </p>
  </footer>
</section>
   </v-sheet>
</template>

<script>

export default {
  name: "HomePage",
  components: {
  },
  data() {
    return {};
  },
  methods: {
    navigate() {
      this.$router.push("/home");
    },
  },
};
</script>
<style>

.v-card__title{
  display: block !important;
  text-align: center;
}

main {
  max-width: 82%;
  background-color: #fff;
  font-size: 1.2rem;
  color: #123456;
  font-family: 'Times New Roman', Times, serif;
  margin: 1% auto;
}
.vil-word {
  color: #778594;
}
.info {
  padding: 1rem;
  max-width: 74%;
  margin: 1rem auto;
}

.v-application p.info {
  background-color: rgba(238, 238, 238, 0) !important;
}
.v-application p.info.highlight {
      border-right: 1px solid rgba(0, 0, 0, 0.12) !important;

}
.call {
  max-width: 74%;
  margin-right: auto;
  margin-left: auto;
  text-align: right;
  display: block;
  text-decoration: none;
}
input.user-login {
  padding: 0.4rem 1.2rem;
  background-color: #fff;
  outline: none;
  border: 0.1rem solid #123456;
  color: #123456;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 4px;
  display: inline;
  transition: 0.1s all;
}

input.user-login:hover {
  background-color: rgba(250, 10, 58, 1);
  color: #fff;
  cursor: pointer;
  border-color: rgba(250, 10, 58, 1);;
}
.intro {
  padding-bottom: 1px;
  padding-top: 1px;
  margin-top: 10%;
}

.intro h2 {
  font-size: 1.3rem;
  text-align: center;
}
.intro .info{
  margin-top: unset;
  border-right: none;
  background-color: unset;
}
</style>
