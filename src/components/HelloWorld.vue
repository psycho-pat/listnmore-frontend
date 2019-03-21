<template>
  <div id="test">
    <h2>This is a band</h2>
    <button @click="getArtists">Get http</button>
    <button @click="postArtists">Post http</button>
  </div>
</template>

<!-- js stuff -->
<script>
/*eslint no-console: 0*/
export default {
  name: "HelloWorld",
  methods: {
    async getArtists() {
      console.log("foo");
      //alert('42')
      const data = await fetch("http://127.0.0.1:5000/get_artists");
      const json = await data.json();
      console.log(json);
      //data = Vue.http.get('http://127.0.0.1:5000/artists');
      //alert(data);
    },
    async postArtists() {
      console.log("foo");
      //alert('42')
      const send_data = { Beatsteaks: 1, "Rage Against the Machine": 3 };
      const data = await fetch("http://127.0.0.1:5000/post_artists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(send_data)
      });
      //const res = await data.json();
      console.log(data);
      //data = Vue.http.get('http://127.0.0.1:5000/artists');
      //alert(data);
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
