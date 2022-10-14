<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>

<!-- Component which holds buttons allowing user to login/sign in.
     Shows user dropdown menu when logged in -->
<template>
  <div class="buttons" v-if="session.user == null">
    <a class="button is-dark" @click="login('Mark', 'Venuto')"> Log in </a>
    <a class="button is-light"> Sign up </a>
  </div>
  <div v-else class="is-flex is-flex-direction-row">
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
        {{ session.user.firstName }} {{ session.user.lastName }}
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
