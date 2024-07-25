<script>
	import { Router, Route,Link } from 'svelte-routing';
	import Home from './Home.svelte'
	
	
</script>

<Router>
	<div class="home">
    <Route path="/" component={Home} />
</div>
</Router>

<style>
    .home {
        font-family: Arial, sans-serif;
        padding: 2rem;
        background-color: #f5f5f5;
    }
</style>




