<template>
  <li>
    {{ artist }}
    <button v-on:click="$emit('remove')">Remove</button>
    <star-rating
      @rating-selected="setRating"
      :rating="rating"
      :show-rating="false"
    ></star-rating>
  </li>
</template>

<script>
export default {
  name: "ArtistRating",
  props: {
    artist: String,
    rating: Number
  },
  methods: {
    setRating(rating) {
      this.$emit("set-rating", rating);
    }
  }
};
</script>
