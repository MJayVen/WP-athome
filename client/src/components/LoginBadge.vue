<script setup lang="ts">
import session, { logout } from "../stores/session";
</script>

<!-- Component which holds buttons allowing user to login/sign in.
     Shows user dropdown menu when logged in -->
<template>
  <div class="buttons" v-if="session.user == null">
    <RouterLink to="/login" class="button is-dark"> Log in </RouterLink>
    <RouterLink to="/register" class="button is-light"> Sign up </RouterLink>
  </div>
  <div v-else class="is-flex is-flex-direction-row">
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
        {{ session.user.username }}
      </a>
      <div class="navbar-dropdown">
        <a class="navbar-item" href="#"> Profile </a>
        <a class="navbar-item"> Friends </a>
        <a class="navbar-item"> Settings </a>
        <hr class="navbar-divider" />
        <a class="navbar-item" @click="logout()"> Logout </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
