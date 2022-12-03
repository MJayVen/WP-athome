<script setup lang="ts">
import session from "@/stores/session";
import { workoutNames } from "@/stores/workouts";
import { computed, ref } from "vue";
import WorkoutStats from "../components/WorkoutStats.vue";

// TODO: change this list to workout names existing in curUser's workout list
// ALSO: make workout names all uppercase or lowercase to make searching easier
// ALSO: make search evaluate as regular expressions instead of exact matches

const search = ref(""); // val of search bar

const results = computed(() => {
  return (
    workoutNames.filter((name) => {
      return name.toLowerCase().includes(search.value.toLowerCase());
    }) || workoutNames
  );
});
</script>

<template>
  <div v-if="session.user" class="container">
    <h1 class="title">Your Workout Stats</h1>
    <input
      class="input is-medium"
      type="text"
      placeholder="Search for workout type"
      v-model="search"
    />
    <WorkoutStats
      v-if="results.length > 0"
      v-for="workoutName in results"
      :workoutName="workoutName"
    />
    <h2 v-else class="title">Workout type not found...</h2>
  </div>
  <h1 v-else class="title">Please log in or sign up</h1>
</template>

<style scoped>
h1 {
  margin-top: 1rem;
  text-align: center;
}
h2 {
  margin-left: 5%;
}

input {
  margin: 1rem auto;
  margin-left: 5%;
  width: 20rem;
}
</style>
