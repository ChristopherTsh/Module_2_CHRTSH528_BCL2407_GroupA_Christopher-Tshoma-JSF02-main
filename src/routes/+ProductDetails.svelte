<script>
    import { onMount } from "svelte";
  import { getContext } from 'svelte';

  let product = null;
  const { id } = getContext('routable').params;

  onMount(async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      product = data;
    } catch (error) {
      console.error(error);
    }
  });
</script>

{#if product}
<div class="product-detail">
  <img class="images" src={product.image} alt="">
  <h1>{product.title}</h1>
  <p>{product.price}</p>
  <p>{product.description}</p>
</div>
{/if}

<style>
  .product-detail {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  .images {
    width: 300px;
    height: 300px;
  }
</style>
