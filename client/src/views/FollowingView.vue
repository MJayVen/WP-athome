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
</template>

<style scoped>
h1 {
  color: var(--white);
  text-align: center;
}
h2 {
  color: red;
  text-align: center;
}


</style>
