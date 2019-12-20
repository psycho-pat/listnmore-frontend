<template>
  <div id="ListOptions">
    <h1>List Options</h1>
    <form>
        Song Count (10 - 200):
        <input type="number" v-model="songCount" min=10 max=200>
        <br />
        Renew Interval (days):
        <input type="number" v-model="renewInterval" min=1 max=14>
        <br />
        Renew Time (hh:mm):
        <input type="time" v-model="renewTime">
        <br />
    </form>
    <button @click="postOptions">POST list options</button>
  </div>
</template>
<script>
const BACKEND_URL = "http://127.0.0.1:5000";
  export default {
    name: "ListOptions",
    data() {
      return {
        songCount: 100,
        renewInterval: 2,
        renewTime: "05:00"
      };
    },
    methods: {
      async getOptions() {
        const data = await fetch(`${BACKEND_URL}/api/list/user-options`);
        let json = await data.json();
        this.songCount = json.songCount;
        this.renewInterval = json.renewInterval;
        this.renewTime = json.renewTime;
      },
      async postOptions() {
        const data = await fetch(`${BACKEND_URL}/api/list/user-options`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({songCount: this.songCount, renewInterval: this.renewInterval, renewTime:this.renewTime})
        });
        //console.log(data);
        await data;
        alert("List options have been saved");
      }
    },
    created: function(){
        this.getOptions();
    }
  }
</script>