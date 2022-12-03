<script setup lang="ts">
import session from "@/stores/session";
import users from "@/stores/users";
import UserRecord from "../components/UserRecord.vue";
</script>

<template>
  <main>
    <div class="container is-flex is-flex-direction-column">
      <h1 class="title">User Management</h1>
      <div class="container">
        <Suspense v-if="session.user">
          <UserRecord v-for="user in users" :user="user" />
        </Suspense>
        <h1 v-else class="title">Login or sign up to manage users</h1>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
