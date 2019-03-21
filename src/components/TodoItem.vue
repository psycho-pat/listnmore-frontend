<template>
  <li>
    {{ title }}
    <button v-on:click="$emit('remove')">Remove</button>
    <star-rating :show-rating="false"></star-rating>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["title"]
};
</script>
