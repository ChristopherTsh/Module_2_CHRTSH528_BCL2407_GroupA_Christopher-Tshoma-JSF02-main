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

    if (selectedCategory) {
      filteredProducts = products.filter(product => product.category === selectedCategory);
    } else {
      filteredProducts = products;
    }
    handleSort();
  }

  function handleSearch() {
    if (searchQuery) {
      filteredProducts = products.filter(product => 
        product.category === selectedCategory && 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedCategory) {
      handleCategoryFilter();
    } else {
      filteredProducts = products;
    }
    handleSort();
  }

  $: handleSearch();

</script>

<div class="controls">
  <div class="custom-select-wrapper">
    <div class="custom-select">
  <select bind:value={sortOption} on:change={handleSort}>
    <option value="">Sort by</option>
    <option value="lowToHigh">Price: Low to High</option>
    <option value="highToLow">Price: High to Low</option>
  </select>
  <div class="custom-select-trigger">
    {sortOption ? sortOption : 'Sort by'}
  </div>
</div>
</div>

  <div class="custom-select-wrapper">
    <div class="custom-select">
  <select bind:value={selectedCategory} on:change={handleCategoryFilter}>
    <option value="">All Categories</option>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>
  <div class="custom-select-trigger">
    {selectedCategory ? selectedCategory : 'All Categories'}
  </div>
</div>
</div>

  <div class="search-bar">
  <input 
    type="text" 
    placeholder="Search by title" 
    bind:value={searchQuery} 
    on:input={handleSearch} 
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
      <svg
        class="svg"
        viewBox="0 -0.03 60.062 60.062"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          d="M670.68,227.733a3.03,3.03,0,0,0,.884,1.072,3.168,3.168,0,0,0,1.282.578l14.662,2.965a3.067,3.067,0,0,1,2.394,2.284,3,3,0,0,1-1.118,3.084l-11.408,8.654a3.01,3.01,0,0,0-.994,1.3,2.956,2.956,0,0,0-.16,1.618L679.3,266.42a3,3,0,0,1-1.275,3.01,3.166,3.166,0,0,1-3.328.146l-13.18-7.407a3.165,3.165,0,0,0-3.091,0l-13.181,7.407a3.156,3.156,0,0,1-3.327-.146,3,3,0,0,1-1.275-3.01l2.66-14.434a2.957,2.957,0,0,0-.16-1.618,3.005,3.005,0,0,0-.994-1.3l-11.408-8.654a3,3,0,0,1-1.118-3.084,3.07,3.07,0,0,1,2.394-2.284l14.662-2.965a3.167,3.167,0,0,0,1.282-.578,3.038,3.038,0,0,0,.884-1.072l6.527-13.518a3.065,3.065,0,0,1,5.448,0Zm-6.993-15.733Z"
          transform="translate(-630.002 -213.141)"
        />
      </svg>
      <Link to={`/product/${product.id}`}><button>Show Details</button></Link>
      
    </div>
  {/each}
  {/if}
</div>


<style>
@import '../Style.css';
</style>
