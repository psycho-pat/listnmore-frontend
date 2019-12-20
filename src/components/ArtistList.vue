<template>
  <div id="ArtistList">
    <form v-on:submit.prevent="addNewArtistObj">
      <label for="new-artist">Add an artist </label>
      <input
        v-model="newArtistObj"
        id="new-artist"
        placeholder="New artist to add"
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
