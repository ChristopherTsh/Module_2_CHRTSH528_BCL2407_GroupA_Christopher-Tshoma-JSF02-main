<!-- ProductDetails -->
<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";

  /**
   * @typedef {Object} Product
   * @property {number} id - The unique identifier for the product.
   * @property {string} title - The title of the product.
   * @property {string} description - A description of the product.
   * @property {number} price - The price of the product.
   * @property {string} category - The category of the product.
   * @property {string} image - The URL of the product image.
   * @property {Object} rating - The rating information for the product.
   * @property {number} rating.rate - The average rating of the product.
   * @property {number} rating.count - The number of reviews for the product.
   */

  /**
   * The ID of the product to fetch.
   * @type {number}
   */
  export let id;

  /**
   * The product data fetched from the API.
   * @type {Product|null}
   */
  let product = null;

  /**
   * Indicates whether the product data is still being loaded.
   * @type {boolean}
   */
  let loading = true;

  /**
   * An error message if an error occurs while fetching the product data.
   * @type {string|null}
   */
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
  });
</script>

{#if loading}
  <div class="loader">
    <svg viewBox="0 0 50 50">
      <circle class="ring" cx="25" cy="25" r="20"></circle>
      <circle class="ball" cx="25" cy="5" r="3.5"></circle>
    </svg>
  </div>
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
        <svg
          class={i < Math.round(product.rating.rate) ? "filled" : "empty"}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"
          />
        </svg>
      {/each}
      <span>({product.rating.count}reviews)</span>
    </div>
    <br />
    <Link to="/"><button><span>to Products</span></button></Link>
  </div>
{:else}
  <p>Product not found.</p>
{/if}

<style>
  @import "../Style.css";
</style>
