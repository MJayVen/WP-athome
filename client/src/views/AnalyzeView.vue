<script setup lang="ts">
import WorkoutStats from "../components/WorkoutStats.vue";
import { useSessionStore } from "../stores/session";

// TODO: change this list to workout names existing in curUser's workout list
const workoutNames = [
  "Squats",
  "Bench Press",
  "Deadlifts",
  "Overhead Press",
  "Barbell Rows",
];
</script>

<template>
<div v-if="useSessionStore().loggedIn" class="container">
    <h1 class="title">Stats</h1>
  <WorkoutStats
    v-for="workoutName in workoutNames"
    :workoutName="workoutName"
  ></WorkoutStats>
</div>
<h1 v-else class="title">Please log in or sign up</h1>
  
</template>


h1 {
    text-align: center;
}



<style scoped>
h1 {
    margin-top: 1rem;
    text-align: center;
}
</style>
