<script setup lang="ts">
import { ref, computed } from "vue";
import session from "@/stores/session";
import users, { searchUsers, type User } from "@/stores/users";
import UserRecord from "../components/UserRecord.vue";


const search = ref("");

const filteredUsers = ref([] as User[]);

async function fetchOptions() {
  const response = await searchUsers(search.value).then((res) => {
    console.log("RES =", res)
    filteredUsers.value = res;
    console.log("FILTERED USERS =", filteredUsers.value)
  });
}

</script>

<template>
  <main>
    <div class="container is-flex is-flex-direction-column">
      <h1 class="title">User Management</h1>
      <div v-if="session.user">
        <h1 class="title">Search for a user</h1>
        <input class="input is-medium" type="text" placeholder="Search for user" v-model="search"
          @change="fetchOptions()" />

        <Suspense>
          <div class="container">
            <div id="searchDropdown">
              <div v-for="user in filteredUsers" :key="user.username" @click="search = user.username">{{ user.username
              }}</div>
            </div>
            <UserRecord v-for="user in filteredUsers" :user="user" />
          </div>
        </Suspense>
      </div>
      <div v-else>
        <p>You must be logged in to view this page.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}

#searchDropdown div {
  /* position: absolute;
  z-index: 1; */
  background-color: white;
  width: 100%;
  color: black !important;
  padding: 5px;
}

#searchDropdown div:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

#searchDropdown div:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

#searchDropdown div:hover {
  background-color: #f2f2f2;
}
</style>
