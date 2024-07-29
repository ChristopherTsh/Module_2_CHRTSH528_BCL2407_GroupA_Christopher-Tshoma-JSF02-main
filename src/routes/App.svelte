<script>
	import { Router, Route,Link } from 'svelte-routing';
	import Home from './+Home.svelte'
	import ProductDetails from './+ProductDetails.svelte';
  import Navbar from './Navbar.svelte';
	
</script>


<Navbar />

<Router>
  <div class="home">
    <Route  path="/" component={Home} />
  </div>
	
	<Route path="/product/:id" component={ProductDetails} />
  </Router>

<style>
    @import '../Style.css'
</style>




