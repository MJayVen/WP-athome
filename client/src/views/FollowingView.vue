<script setup lang="ts">
import followList from "@/stores/followers";
import session from "@/stores/session";
import FollowingRecord from "../components/FollowingRecord.vue";

</script>

<template>
  <div v-if="session.user" class="container">
    <h1 class="title">Friend's Workouts</h1>
    <div class="container" v-if="followList.length">
      <!-- <FollowingRecord
        v-for="followee in followList"
        :followee="followee.uid"
      ></FollowingRecord> -->
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
