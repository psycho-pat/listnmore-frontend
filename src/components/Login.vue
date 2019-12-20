<template>
    <div class="login">
        <h1>Login user:</h1>
        <form>
            <label for="name"><b>Username</b></label>
            <input type="text" v-model="name" placeholder="Enter Username" required>
            <label for="psw"><b>Password</b></label>
            <input type="password" v-model="password" placeholder="Enter Password" required>
            <button @click="handleSubmit">Login</button>
        </form>
    </div>
</template>
<script>
    const BACKEND_URL = "http://127.0.0.1:5000";
    export default {
        props : ["nextUrl"],
        data(){
            return {
                name : "",
                password : "",
            }
        },
        methods : {
            async handleSubmit() {
                //e.preventDefault()
                var formData = new FormData();
                formData.append("name", this.name);
                formData.append("password", this.password);
                const data = await fetch(`${BACKEND_URL}/login`, {
                    method: "POST",
                    body: formData
                });
                await data;
                //alert("Account has been created");
            }
        }
    }
</script>