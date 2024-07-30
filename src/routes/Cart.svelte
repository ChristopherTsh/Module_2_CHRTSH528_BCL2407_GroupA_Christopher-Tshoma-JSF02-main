<!-- Cart.svelte -->
<script>
    export let items = [];
</script>

<main>
    <h1>Your Cart</h1>
    {#if items.length === 0}
        <p>Your cart is empty.</p>
    {:else}
        <ul>
            {#each items as item}
                <li>{item.name} - ${item.price}</li>
            {/each}
        </ul>
    {/if}
</main>

<style>
   @import '../Style.css';
</style>
