<template>
    <div class="login">
        <h1>Login</h1>
        <form id="login_form" action="http://127.0.0.1:5000/api/user/login" method="POST">
            <input type="text" name="name" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
</script>
<style>
    #login_form{
        display:inline-flex;
        flex-direction: column;
    }
        #login_form > button {
        margin-top:0.5em;
        border: none;
        background-color: black;
        color: white;
        border-radius: 25px;
        height: 2em;
    }
    #login_form > button:hover {
  background-color: #333;
}
</style>