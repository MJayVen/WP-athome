<script setup lang="ts">
import { ref } from "vue";
import LoginBadge from "./LoginBadge.vue";
let isActive = ref(false); // reactive variable for hamburger menu
</script>

<!-- Navbar to be used across whole site -->
<template>
  <nav
    class="navbar is-dark has-text-weight-light mb-5"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <img src="../assets/logo.png" />
        </RouterLink>

        <a
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="myNavbar" class="navbar-menu" :class="{ 'is-active': isActive }">

        <div class="navbar-end">
          <LoginBadge />
        </div>
      </div>
    </div>
  </nav>
</template>
