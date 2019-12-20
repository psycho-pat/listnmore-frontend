<template>
    <div class="account">
        <h1>Username: {{ name }}</h1>
        <h1>Spotify access: {{ spotify_message }}</h1>
        <div id="spotify">
            <button @click="authSpotify">Authorize Spotify Access</button>
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
            async authSpotify() {
                const data = await fetch(`${BACKEND_URL}/api/sptfy/authorize`);
                await data;
                this.getUserInfo();
                //alert("Account has been created");
            },
            async getUserInfo() {
                const data = await fetch(`${BACKEND_URL}/api/user/get-info`);
                let json = await data.json();
                this.name = json.name;
                this.spotify_status = json.spotify_status;
                this.user_playlists = json.user_playlists;
                if (json.spotify_status){
                    this.spotify_message = "authorized";
                }
                else{
                    this.spotify_message = "not authorized";
                }
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