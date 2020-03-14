<template>
  <div id="ListCreator">
    <h1>List Creator - select seed artists for your playlis</h1>
    <div id="ButtonGroup">
      <button @click="getTopArtists">Add top artists</button>
      <button @click="getPlaylistArtists">Add artists from playlist</button>
      <button @click="clearSWL">Clear artists</button>
      <button @click="postSWL">Post artists</button>
    </div>
    <ArtistList v-bind:artistList="artistList"></ArtistList>
  </div>
</template>

<script>
/* eslint-disable no-console */
import ArtistList from "@/components/ArtistList.vue";
//const BACKEND_URL = "http://127.0.0.1:5000";
const BACKEND_URL = "";
export default {
  name: "ListCreator",
  data() {
    return {
      artistList: []
    };
  },
  components: {
  ArtistList
  },
  methods: {
    async getSWL() {
      const data = await fetch(`${BACKEND_URL}/api/list/seed-weight-list`,{
        credentials:"include"
      });
      this.artistList = await data.json();
      //console.log(this.artistList);
    },
    clearSWL(){
      var sel = confirm("Clear all selected artists?");
      if (sel == true) {
        this.artistList =[];
      }
    },
    async getPlaylistArtists() {
      var sel = prompt("Insert Playlist Link, Spotify URI or, Playlist ID","")
      var fields = sel.split(':');
      if (fields.length >= 3) {
        sel = fields[fields.length-1];
      }
      else {
        fields = sel.split('/');
        if (fields.length >= 3) {
          sel = fields[fields.length-1].split('?')[0];
        }
      }
      if (sel !== ''){
        alert("Have some patience this will take a few seconds...");
        const data = await fetch(`${BACKEND_URL}/api/sptfy/get-playlist-artists?playlist_id=${sel}`,{
            credentials:"include"
        });
        this.artistList = this.artistList.concat(await data.json());
        alert("done!"); //added playlist artists to seed-weight-list
        //console.log(this.artistList);
      }
    },
    async getTopArtists() {
      var sel = window.prompt("Select term for top artists (short|medium|long)","")
      switch (sel) {
        case "short":
          sel = "short_term";
          break;
        case "medium":
          sel = "medium_term";
          break;
        case "long":
          sel = "long_term";
          break;
        default:
          sel = "medium_term";
          break;
      }
      const data = await fetch(`${BACKEND_URL}/api/sptfy/get-top-artists?term=${sel}`,{
          credentials:"include"
      });
      this.artistList = this.artistList.concat(await data.json());
      alert("added top artists to seed-weight-list");
      //console.log(this.artistList);
    },
    async postSWL() {
      const data = await fetch(`${BACKEND_URL}/api/list/seed-weight-list`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials:"include",
        body: JSON.stringify(this.artistList)
      });
      //console.log(data);
      await data;
      alert("seed-weight-list has been saved");
    }
  },
  created: function(){
    this.getSWL();
  }
}
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
#ButtonGroup{

  display: inline-flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  width: 100%;
  align-items: center;
  justify-content: center;
}
#ButtonGroup > button {
  width: 7em;
  height: 5em;
  background-color: black;
  color: white;
  border-radius: 15px;
  border:none;
  margin: 0.25em 0.25em;
  /*box-shadow: 2px 5px#666*/
}
button:hover {
  background-color:#333;
}
#ListCreator > h1{
  text-align: center;
}
</style>
