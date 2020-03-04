<template>
  <div id="ListOptions">
    <h1>List Options</h1>
    <form id="ListOptionForm">
        Song Count (10 - 200):
        <input type="number" v-model="songCount" min=10 max=200>
        <br />
        Renew Interval (days):
        <input type="number" v-model="renewInterval" min=1 max=14>
        <br />
        Renew Time (hh:mm):
        <input type="time" v-model="renewTime">
        <br />
        <button @click="postOptions">Submit</button>
    </form>
    
  </div>
</template>
<script>
//const BACKEND_URL = "http://127.0.0.1:5000";
const BACKEND_URL = "";
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
<style>
#ListOptions{
  text-align: center;
}
#ListOptionForm {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
#ListOptionForm > input {
  margin-bottom: 0.5em;
}
    #ListOptionForm > button {
        border: none;
        background-color: black;
        color: white;
        border-radius: 25px;
        height: 2em;
    }
    #ListOptionForm > button:hover {
  background-color: #333;
    }
</style>