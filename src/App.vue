<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- It will take the route in which the value of the property name is 'About' -->
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <!-- This is the place where the router content will be mounted -->
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      // Do not confuse this.$route with this.$router
      this.$router.push({ name: 'Home' })
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
  }

  #nav a.router-link-exact-active {
    color: white;
    background: crimson;
  }

  button {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
