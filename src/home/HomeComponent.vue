<template>
    <main>
      <h1>The <span class="vil-word">VIL</span> Homepage!</h1>
    <p class="info"><span class="vil-word">VIL</span> says, give me all your links, and
    let me worry about them.
When you need them, I'll be right behind you!
Never try to remember a funny link ever!</p>
<section>
  <el-row class="mb-4 call">
    <el-button  plain @click="navigate()" class="user-login">Login</el-button>
  </el-row>
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
  margin-bottom: 15%;
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
  background-color: rgba(238, 238, 238, 0.3);
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

<!--
  Hello Sir, I realized it could be more effective communicating my developments
  here since we are in thi journey together. First I must appreciate all your efforts
  to see me through these very difficult situations. Your guide has been a fort to me
  and I always look forward to it.

  This is why I feel that it' important you understand fully how I'm doing to enable
  you understand what has been achieved, what is in progress and what is a potential
  next step.

  I'm also descovering that utilizing this communication method, you'll get a more
  timely update about my developments as opposed to cummulatively waiting for a physical
  meeting.

  Sir I'm very grateful for all of this. I'm hopeful without doubt that all this will
  become story soon, and I will be another great battle you fought and won, my joy being
  that I have fought at your side.

  FORWARD TO NOW
  The test as I told you was not great! I had one or two challenges while taking it.
  There was an output on the test page that confused me so that even when I had written
  enough code to start getting an expected output, I thougt I was still wrong as I was
  not aware of the system output I mentioned. Because of this, I spent the whole 1hr
  3o min on that question alone with no result. When I discovered the issue was near
  the end of y sesion when I had already deleted everything and started afresh in
  another more tedious direction. There I realized that I got output wven when I didn't
  ask for it, this made me discover the system output but it was late already to create
  the required algorithm.

  Due to this and other smaller unexpected outcomes, I was scored zero for the test.
  When I protested to the people via mail and whatsapp, they later considered to give
  me a second chance. God willing, the same question I embattled at first was among.
  Since I had already practiced it and I immediately dove in and wrote it. It is the
  hardest on the list. My solution was working perfectly however, there was an addional
  feature appended to the functionality which I couldn't complete implementing within
  the given time. I just submitted because I had used 1hr already and yet 3 more
  questions were waiting. I solved two more confidently but couldn't attempt the third
  one when I ran out of time.

  For this I hoped for a sore around 80% but it turned out that I was  not awarded mark
  for the first and question at all. It was painful but I also knew that the will of God
  must be done!
 -->
