<script setup lang="ts">
import UserRecord from "../components/UserRecord.vue";
import { User, useUsersStore } from "../stores/users";

const users = useUsersStore();
</script>

<template>
  <main>
    <div class="container is-flex is-flex-direction-column">
      <h1 class="title">User Management</h1>
      <div class="container">
        <UserRecord v-for="user in users.getAllUsers" :user="(user as User)" />
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
