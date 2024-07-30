<script>
  import { onMount } from "svelte";
  import {Link } from 'svelte-routing'
  
  let products = [];
  let filteredProducts = [];
  let loading = true;
  let sortOption = '';
  let categories = [];
  let selectedCategory = '';
  let searchQuery = '';
 

  onMount(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      products = data;
      filteredProducts = data;

      const categoriesResponse = await fetch("https://fakestoreapi.com/products/categories");
      categories = await categoriesResponse.json(); 
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  });

 


  function handleSort() {
    if (sortOption === 'lowToHigh') {
      filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
    } else if (sortOption === 'highToLow') {
      filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
    }
  }

  
  

  function handleCategoryFilter() {
    console.log('Category selected:', selectedCategory);
    if (selectedCategory) {
      filteredProducts = products.filter(product => product.category === selectedCategory);
    } else {
      filteredProducts = products;
    }
    handleSort();
  }

  function handleSearch() {
    console.log('Search query:', searchQuery);
    if (searchQuery) {
      filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;
    }
    handleSort();
  }
  
  // Removed auto search trigger when typing
  $: handleSearch();

</script>

<div class="controls">
  <select bind:value={sortOption} on:change={handleSort} class="custom-dropdown sort-dropdown">
    <option value="">Sort by</option>
    <option value="lowToHigh">Price: Low to High</option>
    <option value="highToLow">Price: High to Low</option>
  </select>

  <select bind:value={selectedCategory} on:change={handleCategoryFilter} class="custom-dropdown category-dropdown">
    <option value="">All Categories</option>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>

  <div class="search-bar">
  <input 
    type="text" 
    placeholder="Search by title" 
    bind:value={searchQuery} 
  />
  <button class="search-button" on:click={handleSearch}>
    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M10 2a8 8 0 1 1-5.293 14.706l-4.358 4.358-1.414-1.414 4.358-4.358A8 8 0 0 1 10 2zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4z"/></svg>
  </button>
</div>
</div>

<div class="container">
  {#if loading}
    <p>Loading...</p>
  {:else}

  {#each filteredProducts as product (product.id)}
    <div class="product">
      <img class="images" src={product.image} alt="" />
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <div class="svgClass rating">
        {#each Array(5) as _, i}
          <svg class={i < Math.round(product.rating.rate) ? 'filled' : 'empty'} viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z"/>
          </svg>
        {/each}
      </div>
      <Link to={`/product/${product.id}`}><button>Show Details</button></Link>
      
    </div>
  {/each}
  {/if}
</div>


<style>
@import '../Style.css';
</style>
