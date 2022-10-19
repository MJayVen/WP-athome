<script setup lang="ts">
import {useSessionStore} from "../stores/session";
const session = useSessionStore();
console.log("current user = " + session.user?.username);

</script>

<!-- Component which holds buttons allowing user to login/sign in.
     Shows user dropdown menu when logged in -->
<template>
  <div class="buttons" v-if="!session.getUsername">
    <RouterLink to="/login" class="button is-dark"> Log in </RouterLink>
    <RouterLink to="/register" class="button is-light"> Sign up </RouterLink>
  </div>
  <div v-else class="is-flex is-flex-direction-row">
    <div class="navbar-item">
          <RouterLink to="/users" class="button is-dark"> Manage Users </RouterLink>
    </div>
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
        {{ session.getUsername }}
      </a>
      <div class="navbar-dropdown">
        <a class="navbar-item" href="#"> Profile </a>
        <a class="navbar-item"> Friends </a>
        <a class="navbar-item"> Settings </a>
        <hr class="navbar-divider" />
        <a class="navbar-item" @click="session.logout()"> Logout </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
