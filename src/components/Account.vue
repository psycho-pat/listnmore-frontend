<template>
    <div class="account" id="AccountDiv">
        <div id="account_username">
            <h1>Username: {{ name }}</h1>
            <button @click="logoutUser">Logout</button>
        </div>
        <h1>Spotify access: {{ spotify_message }}</h1>
        <div id="spotify">
            <a href="http://127.0.0.1:5000/api/sptfy/authorize"><button>Authorize Spotify Access</button></a>
        </div>
        <h1>User Playlists:</h1>
        <div id="playlists">
            <ul>
                <div v-for="(list, index) in user_playlists" v-bind:key="index">
                    <li>
                        {{list}} <button @click="renewPlaylist(index)">Renew NOW</button>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>
<script>
    const BACKEND_URL = "http://127.0.0.1:5000";
    export default {
        props : ["nextUrl"],
        data(){
            return {
                name : "username",
                spotify_status: false,
                spotify_message: "not authorized",
                user_playlists: [] //['foo','bar']
            }
        },
        methods : {
            async logoutUser() {
                const data = await fetch(`${BACKEND_URL}/api/user/logout`,{
                    credentials:"include"
                });
                await data;
                this.name = "username";
                this.spotify_status = false;
                this.spotify_message = "not authorized";
                this.getUserInfo();
                //alert("Account has been created");
            },
            async getUserInfo() {
                //console.log("getUserInfo");
                const data = await fetch(`${BACKEND_URL}/api/user/get-info`,{
                    credentials:"include"
                });
                let json = await data.json();
                //console.log(JSON.stringify(json));
                this.name = json.name;
                this.spotify_status = json.spotify_status;
                this.user_playlists = json.user_playlists;
                if (json.spotify_status){
                    this.spotify_message = "authorized";
                }
                else{
                    this.spotify_message = "not authorized";
                }
                //console.log(this.name);
            },
            async renewPlaylist(index) {
                const data = await fetch(`${BACKEND_URL}/api/list/renewPlaylist?index=` + index);
                //console.log(data);
                await data;
                alert("Have some patience this will take a few seconds...");
            }
        },
        created: function(){
            this.getUserInfo();
        }
    }
</script>
<style>

#account_username {
    display: inline-flex;
    align-items: center;
}
#account_username > button {
    margin-left: 1em;
}
    #AccountDiv button {
        margin-top:0.5em;
        border: none;
        background-color: black;
        color: white;
        border-radius: 25px;
        height: 2em;
    }
    button:hover {
  background-color: #333;
    }
</style>