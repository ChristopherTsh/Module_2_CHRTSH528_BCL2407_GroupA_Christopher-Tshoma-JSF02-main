<!-- Login.svelte -->
<script>
    let username = '';
    let password = '';

    function handleSubmit() {
        // Handle login logic here
        alert(`Logging in as ${username}`);
    }
</script>

<main>
    <h1>Login</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="username">Username:</label>
        <input type="text" id="username" bind:value={username} />

        <label for="password">Password:</label>
        <input type="password" id="password" bind:value={password} />

        <button type="submit">Login</button>
    </form>
</main>

<style>
    @import '../Style.css';
</style>
