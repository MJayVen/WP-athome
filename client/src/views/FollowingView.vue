<script setup lang="ts">
import { useSessionStore } from "../stores/session";
import { useUsersStore, Workout } from "../stores/users";
import FollowingRecord from "../components/FollowingRecord.vue";

// stores
const sessionStore = useSessionStore();
const usersStore = useUsersStore();

// data
const curUser = sessionStore.getUser;
// get all workouts from each follower
const followList = usersStore.getAllFollowers(curUser?.username as string);
</script>

<template>
  <div v-if="sessionStore.loggedIn" class="container">
    <h1 class="title">Friend's Workouts</h1>
    <div class="container" v-if="followList?.length || 0">
      <FollowingRecord
        v-for="followee in followList"
        :user="followee"
      ></FollowingRecord>
    </div>
    <div class="container" v-else>
      <h2 class="title">Looks like you have no friends :(</h2>
    </div>
  </div>
  <h1 v-else class="title">Please log in or sign up</h1>
</template>

<style scoped>
h1 {
  text-align: center;
}
h2 {
  color: red;
  text-align: center;
}
</style>
