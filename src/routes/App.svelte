<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./+Home.svelte";
  import ProductDetails from "./+ProductDetails.svelte";
  import Navbar from "./Navbar.svelte";
  import Login from "./Login.svelte";
  import Cart from "./Cart.svelte";
  import Wishlist from "./Wishlist.svelte";
</script>

<Navbar />

<Router>
  <div class="home">
    <!-- Home page route -->
    <Route path="/" component={Home} />
  </div>
  <!-- Product details route with a dynamic ID parameter -->
  <Route path="/product/:id" component={ProductDetails} />
  <!-- Login page route -->
  <Route path="login" component={Login} />
  <!-- Shopping cart page route -->
  <Route path="cart" component={Cart} />
  <!-- Wishlist page route -->
  <Route path="wishlist" component={Wishlist} />
</Router>

<style>
  @import "../Style.css";
</style>
