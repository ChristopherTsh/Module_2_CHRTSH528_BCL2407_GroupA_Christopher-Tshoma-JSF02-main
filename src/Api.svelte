<script>
    let products = []
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
products = data;
    console.log(data);
}) 

</script>


    <div class="container">
        {#each products as product (product.id)}
       <h1>{product.title}</h1>
       <p>{product.price}</p>
       {/each}
</div>

<style>

</style>