<template>
  <Navbar class="padding"/>
  <div class="padding">
    <router-view/>
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from './components/Footer.vue'
export default {
  components: {Navbar, Footer},
  setup() {

  }
}

</script>

<style>
body{
  margin: 0;
}
.padding {
  padding: 38px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2d2942;
  padding: 0px;
}
a{
  text-decoration: none;
}
</style>
