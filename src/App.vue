<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/account">Account</router-link> |
      <router-link to="/ListCreator">ListCreator</router-link> |
      <router-link to="/ListOptions">ListOptions</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//import 'bootstrap-vue/dist/bootstrap-vue.css'
/*
import ListCreator from './components/ListCreator.vue'
import ListOptions from './components/ListOptions.vue'

export default {
  name: 'app',
  components: {
    ListCreator,
    ListOptions
  }
}
*/
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width: 15%;
  height: auto;
}
</style>
