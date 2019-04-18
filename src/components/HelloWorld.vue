<template>
  <div id="test">
    <h2>This is a band</h2>
    <input v-model="user_name" placeholder="username" />
    <a :href="createCreds"> <button>Create Credentials</button> </a>
    <button @click="getArtists">Get top artists</button>
    <button @click="postArtists">Post selection</button>
    <button @click="refillPlaylist">Refill playlist</button>
    <ArtistList v-bind:artistList="artistList"></ArtistList>
  </div>
</template>

<!-- js stuff -->
<script>
import ArtistList from "@/components/ArtistList.vue";
//const BACKEND_URL = "http://127.0.0.1:5000";
const BACKEND_URL = "http://35.193.178.237:5000";

/*eslint no-console: 0*/
export default {
  name: "HelloWorld",
  data() {
    return {
      artistList: [],
      user_name: ""
    };
  },
  components: { ArtistList },
  methods: {
    async getArtists() {
      console.log("foo");
      //alert('42')
      const data = await fetch(`${BACKEND_URL}/get_artists`);
      this.artistList = await data.json();
      console.log(this.artistList);
      //data = Vue.http.get('http://127.0.0.1:5000/artists');
      //alert(data);
    },
    async postArtists() {
      console.log("foo");
      //alert('42')
      const data = await fetch(`${BACKEND_URL}/post_artists`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.artistList)
      });
      //const res = await data.json();
      console.log(data);
      //data = Vue.http.get('http://127.0.0.1:5000/artists');
      alert("Music matrix created - ready to generate songs");
    },
    async refillPlaylist() {
      const data = await fetch(`${BACKEND_URL}/refillPlaylist`);
      console.log(await data);
    }
  },
  computed: {
    createCreds() {
      console.log("foo");
      //const user_name = "psycho.pat";
      return `${BACKEND_URL}/create_creds?user_name=${this.user_name}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
