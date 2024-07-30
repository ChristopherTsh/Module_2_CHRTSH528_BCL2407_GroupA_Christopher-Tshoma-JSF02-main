<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  

  export let id;

  console.log("Product ID:", id);

  let product = null;
  let loading = true;
  let error = null;

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
    ;
  });
</script>

{#if loading}
  <p>Loading...</p>
{:else if error}
<p>Error: {error}</p>
{:else if product}
    <div class="product-details home">
      <img class="images" src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <div class="svgProduct rating">
        {#each Array(5) as _, i}
          <svg class={i < Math.round(product.rating.rate) ? 'filled' : 'empty'} viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"/>
          </svg>
        {/each}
        <span>({product.rating.count}reviews)</span>
        </div>
      <br>
      <Link to="/"><button><span>to Products</span></button></Link>
    </div>
  {:else}
    <p>Product not found.</p>
  {/if}


<style>
@import '../Style.css';
</style>
