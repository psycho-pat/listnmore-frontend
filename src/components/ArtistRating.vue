<template>
  <li>
    <p>{{ value.name }}</p>
    <form>
      <label>Type:
        <select v-model="value.type" id="type">
          <option value="seed">seed</option>
          <option value="isolated">isolated</option>
          <option value="banned">banned</option>
        </select>
      </label>
    </form>
    <star-rating
      active-color="#4CAF50"
      border-color="#000000"
      rounded-corners="true"
      @rating-selected="setRating"
      :rating="value.rating"
      :show-rating="false"
    ></star-rating>
    <button v-on:click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
export default {
  name: "ArtistRating",
  props: {
    value: Object
  },
  methods: {
    setRating(rating) {
      this.$emit("set-rating", rating);
    }
  }
};
</script>
<style>
</style>