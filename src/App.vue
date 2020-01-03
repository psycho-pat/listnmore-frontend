<template>
  <div id="app">
    <nav :class="{'item-visible':itemVisible}">
      <router-link to="/"><Logo size="2em"></Logo></router-link>
      <ul id="navbarUL" :class="{'item-visible':itemVisible}">
        <li id="homeRoute"><router-link to="/">Home</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/account">Account</router-link></li>
        <li><router-link to="/ListCreator">ListCreator</router-link></li>
        <li><router-link to="/ListOptions">ListOptions</router-link></li>
      </ul>
      <button @click="hamburgerClick"><img id="hamburger" src="./assets/Hamburger_icon.svg" /></button>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>-

<script>
import Logo from '@/components/Logo.vue'

document.title = "Listnnmore";
export default {
  name: 'app',
  components: {
    Logo
  },
  data() {
    return {itemVisible:false}
  },
  methods : {
    hamburgerClick(){
      this.itemVisible = !this.itemVisible;
    }
  }
}
</script>

<style>
html{
  box-sizing: border-box;
  overflow-y: scroll;
}
body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
main {
  margin: 1em 2em;
}
#app {
  display: flex;
  flex-direction: column;
}
#homeRoute {
  display: none;
}
nav {
  display: flex;
  flex-direction: row;
  top: 0;
  position: sticky;
  align-items: center;
  background-color: black;
  height: 2.5em;
}
nav > ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  padding: 0;
  margin-left: 0;
}

nav > button {
  display: inline-flex;
  border: 0;
  /*margin-left: auto;*/
  margin-right: 0.25em;
  margin-left: auto;
  padding: 0em;
  align-items: center;
  visibility: hidden;
  align-self: center;
}

#hamburger {
  align-items:center;
  filter: invert(1);
  height: 70%;
  display: inline-flex;
  visibility: hidden;
  /*visibility: visible;*/
}

nav > a {
  height: 100%;
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
}

nav > ul > li {
  padding: 0;
}

nav > ul > li > a {
  display: inline-flex;
  color: white;
  text-decoration: none;
  height: 100%;
  align-items: center;
  padding: 0 0.5em;
}

nav > ul > li .router-link-exact-active {
  background-color: #4CAF50;
}

nav > a > svg {
  margin: 0 0.25em;
  color: white;
}    


nav > a.router-link-exact-active > svg {
  color: #4CAF50;
}

/* Change the link color to #111 (black) on hover */
li a:hover:not(.router-link-exact-active) {
  background-color: #333;
}

@media screen and (max-width: 32em) {
  #homeRoute {
  display: inline-grid;
}
  nav {
    height: max-content;
    justify-content: space-between;
    min-height: 2.5em;
  }
  nav > a{
    align-self: center;
  }
  nav > ul {
    width: 100%;
    flex-direction: column;
    padding-right: 0.25em;
  }
  nav > ul > li {
    
  }
  nav >ul >li > a {
    text-align: center;
    width: 100%;
    display:inline-grid;
    padding: 0;
    border-radius: 25px;
    height: 1.5em;
    margin: 0.25em 0
  }
    nav > ul > li > a:not(.router-link-exact-active){
    display: none;
  }
    nav > ul.item-visible > li > a{
    display: inline-grid;
  }
  nav.item-visible > a{
    align-self: flex-start;
    padding-top: 0.25em;
  }
  nav.item-visible > button{
    align-self: flex-start;
    padding-top: 0.333em;
  }
    nav > ul.item-visible > li:first-child {
    padding-top: 0.25em;
    }
    nav > ul.item-visible > li:last-child {
    padding-bottom: 0.25em;
    }
  nav > button {
  }
  #hamburger {
    visibility: visible;
  }
}
</style>
