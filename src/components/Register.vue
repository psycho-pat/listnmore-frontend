<template>
    <div class="register">
        <h1>Register new user</h1>
        <form id="register_form" action="http://127.0.0.1:5000/api/user/register" method="POST"> 
            <input type="text" name="name" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
    </div>
</template>
<script>
</script>
<style>
    #register_form{
        display:inline-flex;
        flex-direction: column;
    }
    #register_form > button {
        margin-top:0.5em;
        border: none;
        background-color: black;
        color: white;
        border-radius: 25px;
        height: 2em;
    }
    #register_form > button:hover {
  background-color: #333;
}
</style>