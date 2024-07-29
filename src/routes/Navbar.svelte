<!-- Navbar.svelte -->
<script>
    import { onMount } from 'svelte';
    let isOpen = false;
  
    function toggleMenu() {
      isOpen = !isOpen;
    }
  </script>
  
  <nav class="navbar">
    <div class="logo">
      <a href="/">Home</a>
    </div>
    <div class="menu" >
      <ul class={isOpen ? 'open' : ''}>
        <li><a href="/wishlist">Wishlist</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <button class="hamburger" on:click={toggleMenu}>
        &#9776;
      </button>
    </div>
  </nav>
  
  <style>
   @import '../Style.css';
  </style>
  