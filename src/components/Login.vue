<template>
    <div class="login" id="login">
        <h1>Login</h1>
        <form id="login_form" action="/api/user/login" method="POST">
            <input type="text" name="name" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
</script>
<style>
    #login{
        text-align: center;
    }
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