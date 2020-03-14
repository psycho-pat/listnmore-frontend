<template>
  <div id="ArtistList">
    <form  id="NewArtistForm" v-on:submit.prevent="addNewArtistObj">
      <input
        v-model="newArtistObj"
        id="new-artist"
        placeholder="New artist"
      />
      <button>Add</button>
    </form>
    <ul>
      <ArtistRating
        v-for="(artistObj, index) in artistList"
        v-bind:key="index"
        v-model="artistList[index]"
        v-on:remove="artistList.splice(index, 1)"
        v-on:set-rating="rating => setRating(rating, artistObj)"
        v-on:input="setRating(1, artistObj)"
      ></ArtistRating>
    </ul>
  </div>
</template>

<!-- js stuff -->
<script>
import ArtistRating from "@/components/ArtistRating.vue";

export default {
  name: "ArtistList",
  components: {
    ArtistRating
  },
  props: {
    artistList: Array
  },
  data() {
    return {
      newArtistObj: ""
    };
  },
  methods: {
    setRating(rating, artistObj) {
      artistObj.rating = rating;
    },
    addNewArtistObj() {
      this.artistList.push({
        name: this.newArtistObj,
        rating: 1,
        type: "seed"
      });
      this.newArtistObj = "";
    }
  }
};
</script>
<style>
  #NewArtistForm {
    display: inline-flex;
    align-items: center;
    width:100%;
    justify-content: center;
  }
  #NewArtistForm > button {
    margin-top: 0;
    margin-left:0.5em;
    border: none;
    background-color: black;
    color: white;
    border-radius: 25px;
    height: 2em;
  }
  #ArtistList > ul{
    display:inline-flex;
    flex-direction: column;
    list-style-type:none;
    width:fit-content;
    padding:0;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #ArtistList ul > li {
    background-color: black;
    border-radius:25px;
    color: white;
    text-align: center;
    display:grid;
    grid-template-columns: 16em 5em;
    margin-bottom: 0.5em;
    padding:0.3em;
    width:fit-content;
  }
  #ArtistList ul > li > select{
    border-radius: 5px;
  }
  #ArtistList ul > li > p {
    margin:0;
    align-self: center;
    font-size: 2em;
    }
  #ArtistList ul > li > button {
    display: block;
    align-self: center;
    margin: 0;
    height: 2em;
    color: white;
    background-color: black;
    border-radius: 25px;
    border-color: white;
    border-style: solid;
    width:fit-content;
  }
  #ArtistList ul > li > button:hover {
  background-color: #333;
  }
  </style>