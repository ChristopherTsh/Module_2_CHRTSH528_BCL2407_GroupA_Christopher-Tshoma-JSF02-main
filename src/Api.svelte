<script>
  import { onMount } from "svelte";

  let products = [];


 onMount(async () => {
    try{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
      console.log(data);
      products = data;
    } catch(error) {
        console.error(error);
     }
    });
</script>

<div class="container">
  {#each products as product (product.id)}
    <h1>{product.title}</h1>
    <p>{product.price}</p>
  {/each}
</div>

<style>
</style>
