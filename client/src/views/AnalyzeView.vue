<script setup lang="ts">
import { ref } from "vue";
import WorkoutStats from "../components/WorkoutStats.vue";
import { useSessionStore } from "../stores/session";

// TODO: change this list to workout names existing in curUser's workout list
// ALSO: make workout names all uppercase or lowercase to make searching easier
// ALSO: make search evaluate as regular expressions instead of exact matches
const workoutNames = [
  "Squats",
  "Bench Press",
  "Deadlifts",
  "Overhead Press",
  "Barbell Rows",
];

const searchVal = ref('bench Press'); // val of search bar

</script>

<template>
  <div v-if="useSessionStore().loggedIn" class="container">
    <h1 class="title">Your Workout Stats</h1>
    <input class="input is-medium" type="text" placeholder="Search for workout type" v-model="searchVal"/>
    <WorkoutStats v-if="(workoutNames.includes(searchVal) || searchVal === '')" v-for="workoutName in workoutNames" :workoutName="workoutName" :searchVal="searchVal" />
    <h2 v-else class="title">Workout type not found...</h2>
  </div>
  <h1 v-else class="title">Please log in or sign up</h1>

</template>

<style scoped>
h1 {
  margin-top: 1rem;
  text-align: center;
}

input {
  margin: 1rem auto;
  margin-left: 5%;
  width: 20rem;
}

</style>
