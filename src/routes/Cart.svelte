<!-- Cart.svelte -->
<script>
  export let products = [];
</script>

<main>
  <h1>Your Cart</h1>
  {#if products.length === 0}
    <p>Your cart is empty.</p>
  {:else}
    <ul>
      {#each products as product}
        <li>{product.title} - ${product.price}</li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  @import "../Style.css";
</style>
