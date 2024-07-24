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
    <img class="images" src={product.image} alt="">
    <h1>{product.title}</h1>
    <p>{product.price}</p>
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
  {/each}
</div>

<style>
    .container{
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d1d5db; 
    border-radius: 0.5rem; 
    padding: 1rem; 
    transition: box-shadow 0.2s;
    }
    .svg{
        width: 16px;
        height: 16px;
    }
    .images{
        width: 120px;
        height: 120px;
        margin-top: 20px;
    }
</style>
