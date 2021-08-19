<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
export default {
  components: {Navbar},
  setup() {

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2d2942;
  padding: 30px;
}
a{
  text-decoration: none;
}
</style>
