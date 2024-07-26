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
      <a href="/">LogoName</a>
    </div>
    <div class="menu">
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
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #333;
      color: white;
    }
  
    .logo a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
    }
  
    .menu {
      display: flex;
      gap: 1rem;
    }
  
    .menu ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    .menu li a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: background 0.3s;
    }
  
    .menu li a:hover {
      background: #444;
    }
  
    .hamburger {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
    }
  
    @media (max-width: 768px) {
      .menu ul {
        display: none;
        flex-direction: column;
        width: 100%;
        background: #333;
      }
  
      .menu ul.open {
        display: flex;
      }
  
      .hamburger {
        display: block;
      }
    }
  </style>
  