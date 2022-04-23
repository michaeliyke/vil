<template>
    <main>
      <h1>The <span class="vil-word">VIL</span> Homepage!</h1>
    <p class="info"><span class="vil-word">VIL</span> says, give me all your links, and
    let me worry about them.
When you need them, I'll be right behind you!
Never try to remember a funny link ever!</p>
<section>
  <form action="#" class="call">
    <!-- on click, submit this form to the link in action-->
    <input class="user-login" type="button" value="Login" name="login" />
  </form>
  <footer class="intro">
    <h2>what is <span class="vil-word">VIL</span>?</h2>
    <p class="info"><span class="vil-word">VIL</span> aims to make our worklife easier by
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
  </footer>
</section>
    </main>
</template>

<script>

export default {
  name: "HomePage",
  components: {
  },

};
</script>
<style>
main {
  max-width: 82%;
  background-color: #fff;
  font-size: 1.2rem;
  color: #123456;
  font-family: 'Times New Roman', Times, serif;
  margin: 1% auto;
}
h1 {
  text-align: center;
}
.vil-word {
  font-family:cursive;
}
.info {
  background-color: rgba(238, 238, 238, 0.3);
  padding: 1rem;
  max-width: 74%;
  margin: 10% auto;
  border-right: 4px solid #123456;
}
.call {
  max-width: 74%;
  margin-right: auto;
  margin-left: auto;
  text-align: right;
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
  background-color: rgba(238, 238, 238, 0.3);
  padding-bottom: 1px;
  padding-top: 1px;
  margin-top: 1rem;;
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
