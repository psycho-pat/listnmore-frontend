<template>
    <div class="register" id="register">
        <h1>Register</h1>
        <form id="register_form" action="/api/user/register" method="POST"> 
            <input type="text" name="name" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
    </div>
</template>
<script>
</script>
<style>
    #register{
        text-align: center;
    }
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