<script lang="ts">
import UserRecord from "../components/UserRecord.vue";
import { useUsersStore } from "../stores/users";

export default {
    components: {
        UserRecord,
    },
    setup() {
        const users = useUsersStore();
        return { users };
    },
}


</script>

<template>
  <main>
    <div class="container is-flex is-flex-direction-column">
      <h1 class="title">User Management</h1>
      <div class="container">
        <UserRecord v-for="user in users.getAllUsers" :user="user" />
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  color: var(--white);
  text-align: center;
}
</style>
