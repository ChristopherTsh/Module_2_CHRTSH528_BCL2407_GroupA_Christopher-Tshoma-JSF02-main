<!-- Wishlist.svelte -->
<script>
    export let products = [];
</script>

<main>
    <h1>Your Wishlist</h1>
    {#if products.length === 0}
        <p>Your wishlist is empty.</p>
    {:else}
        <ul>
            {#each products as product}
                <li>{product.product} - ${product.price}</li>
            {/each}
        </ul>
    {/if}
</main>

<style>
    @import '../Style.css';
</style>
