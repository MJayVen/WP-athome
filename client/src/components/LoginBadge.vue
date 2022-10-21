<script setup lang="ts">
import {useSessionStore} from "../stores/session";
const session = useSessionStore();

</script>

<!-- Component which holds buttons allowing user to login/sign in.
     Shows user dropdown menu when logged in -->
<template>
  <div class="buttons" v-if="!session.loggedIn">
    <RouterLink to="/login" class="button is-dark"> Log in </RouterLink>
    <RouterLink to="/register" class="button is-light"> Sign up </RouterLink>
  </div>
  <div v-else class="is-flex is-flex-direction-row">
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
        {{ session.username }}
      </a>
      <div class="navbar-dropdown">
        <RouterLink to='/' class="navbar-item" > My Workouts </RouterLink>
        <RouterLink to='/following' class="navbar-item"> Friends </RouterLink>
        <!-- <a class="navbar-item"> Settings (not implemented) </a> -->
        <hr class="navbar-divider" />
        <a class="navbar-item" @click="session.logout()"> Logout </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
