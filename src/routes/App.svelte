<script>
	import { Router, Route,Link } from 'svelte-routing';
	import Home from './+Home.svelte'
	import ProductDetails from './+ProductDetails.svelte';
  import Navbar from './Navbar.svelte';
	
</script>


<Navbar />

<Router>
	<Route path="/" component={Home} />
	<Route path="/product/:id" component={ProductDetails} />
  </Router>

<style>
    .home {
        font-family: Arial, sans-serif;
        padding: 2rem;
        background-color: #f5f5f5;
    }
</style>




