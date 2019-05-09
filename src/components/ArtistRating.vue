<template>
  <li>
    {{ value.artist }}
    <button v-on:click="$emit('remove')">Remove</button>
    <input type="checkbox" id="banned" v-model="value.banned" />
    <label for="banned">ban</label>
    <input type="checkbox" id="isolated" v-model="value.isolated" />
    <label for="isolated">isolate</label>
    <star-rating
      @rating-selected="setRating"
      :rating="value.rating"
      :show-rating="false"
    ></star-rating>
  </li>
</template>

<script>
export default {
  name: "ArtistRating",
  props: {
    value: Object
    //artist: String,
    //rating: Number,
    //banned: Boolean,
    //isolated: Boolean
  },
  methods: {
    setRating(rating) {
      this.$emit("set-rating", rating);
    }
  }
};
</script>
