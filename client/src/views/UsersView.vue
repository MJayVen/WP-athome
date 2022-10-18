<script setup lang="ts">
import UserRecord from "../components/UserRecord.vue";
import users, { addUser } from "../stores/users";

// Data for testing
addUser("test", "test");


</script>

<template>
  <main>
    <div class="container is-flex is-flex-direction-column">
      <h1 class="title">User Management</h1>
      <UserRecord v-for="user in users" :user="user" />
    </div>
  </main>
</template>

<style scoped>
h1 {
  color: var(--white);
  text-align: center;
}
</style>
