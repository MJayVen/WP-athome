<script setup lang="ts">
import { getUsers } from "@/stores/users";
import UserRecord from "../components/UserRecord.vue";

</script>

<template>
  <main>
    <div class="container is-flex is-flex-direction-column">
      <h1 class="title">User Management</h1>
      <div class="container">
        <UserRecord v-for="user in getUsers" :user="user" />
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
