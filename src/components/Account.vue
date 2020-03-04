<template>
    <div class="account" id="AccountDiv">
        <div id="account_username">
            <h1>Username: {{ name }}</h1>
            <button @click="logoutUser">Logout</button>
        </div>
        <br>
        <div id="account_spotify">
            <h1>Spotify access: {{ spotify_message }}</h1>
            <a href="/api/sptfy/authorize"><button>Authorize Spotify Access</button></a>
        </div>
        <h1>User Playlists:</h1>
        <div>
            <ul id="playlists">
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
    //const BACKEND_URL = "http://127.0.0.1:5000";
    const BACKEND_URL = "";
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
                this.user_playlists =  [];
                this.getUserInfo();
                this.$router.push({ name: 'home'});
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
                this.spotify_status = Boolean(json.spotify_auth);
                this.user_playlists = json.playlists;
                if (json.spotify_auth == true){
                    this.spotify_message = "authorized";
                }
                else{
                    this.spotify_message = "not authorized";
                }
                //console.log(this.name);
            },
            async postAuthorize(code) {
                //console.log("getUserInfo");
                var formData = new FormData();
                formData.append('code',code);
                //const data = 
                await fetch(`${BACKEND_URL}/api/sptfy/authorize`,{
                    method: 'POST',
                    credentials:"include",
                     //headers: {
                    //'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    //},
                    body: formData
                    //JSON.stringify(data) // body data type must match "Content-Type" header
                });
                //let json = await data.json();

            },
            async renewPlaylist(index) {
                const data = await fetch(`${BACKEND_URL}/api/list/renewPlaylist?index=` + index,{
                    credentials:"include"
                });
                //console.log(data);
                await data;
                alert("Have some patience this will take a few seconds...");
            }
        },
        created: function(){
            var url = window.location.href;
            if (url.search("code") != -1) {
                //console.log(url.substring(url.search("=")+1,url.search("#")));
                this.postAuthorize(url.substring(url.search("=")+1,url.search("#")));
                //console.log("postAuth");
                //this.$router.push({name:'login'});
                setTimeout(function(){
                //do what you need here
                window.location.href = `${BACKEND_URL}/#/account`;
                }, 3000);
            }
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
        height: max-content;
        padding: 0.25em 1em;
    }
    button:hover {
  background-color: #333;
    }
#account_spotify{
    display: inline-flex;
    align-items: center;
}
#account_spotify > a{
    margin-left: 1em;
}
#playlists {
    display: inline-flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
}
</style>