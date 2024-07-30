<!-- Navbar.svelte -->
<script>
  /**
   * @module Navbar
   *
   * This Svelte component renders a navigation bar with links to different pages of the application.
   * It includes a hamburger menu for toggling the visibility of the navigation links.
   */

  import { onMount } from "svelte";

  /**
   * @property {boolean} isOpen - Indicates whether the mobile menu is open or closed.
   * @default false
   */
  let isOpen = false;

  /**
   * Toggles the visibility of the mobile menu.
   */
  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<nav class="navbar">
  <div class="logo">
    <a href="/">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
      </svg>
      Home
    </a>
  </div>
  <div class="menu">
    <ul class={isOpen ? "open" : ""}>
      <li>
        <a href="/wishlist">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
          Wishlist
        </a>
      </li>
      <li>
        <a href="/cart"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.25 10h9.25l1.45-4H5.21L7.25 10zm13.65-4.34l-3.2 9.19c-.14.43-.52.73-.98.73H7.56c-.45 0-.84-.31-.98-.74L3.36 5.65H1V3h3.25c.45 0 .84.31.98.74l1.5 4.25H18c.38 0 .72.21.89.55.17.34.17.75 0 1.09L18 5.66h-3.76l1.5-4.25c.14-.43.53-.74.98-.74H20v2h-1.75z"
              fill="currentColor"
            />
          </svg>Cart</a
        >
      </li>
      <li>
        <a href="/login"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              fill="currentColor"
            />
          </svg>Login</a
        >
      </li>
    </ul>
    <!-- Hamburger menu button for mobile view -->
    <button class="hamburger" on:click={toggleMenu}> &#9776; </button>
  </div>
</nav>

<style>
  @import "../Style.css";
</style>
