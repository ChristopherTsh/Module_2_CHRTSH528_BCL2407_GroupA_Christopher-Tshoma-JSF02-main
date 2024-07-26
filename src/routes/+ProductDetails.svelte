<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  //   import { page } from '$app/stores';
  // let slug = $page.params.slug;

  export let id;

  console.log("Product ID:", id);

  let product = null;
  let loading = true;

  onMount(async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch product with ID ${id}: ${response.statusText}`
        );
      }
      product = await response.json();
      console.log("Product Data:", product); // Check if product data is fetched
    } catch (err) {
      console.error("Error fetching product data:", err);
      error = err.message;
    } finally {
      loading = false;
    }
    F;
  });
</script>

{#if loading}
  <p>Loading...</p>
{:else if error}
  {#if product}
    <div class="product-details">
      <img class="images" src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/"><button>Back to Products</button></Link>
    </div>
  {:else}
    <p>Product not found.</p>
  {/if}
{/if}

<style>
  .product-details {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 1rem;
    max-width: 600px;
    margin: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .product-details h1 {
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }
  .product-details p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  .images {
    width: 300px;
    height: 300px;
    margin-bottom: 1rem;
  }
</style>
