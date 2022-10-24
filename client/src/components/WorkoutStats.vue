<script setup lang="ts">
import { useUsersStore } from "../stores/users";
import { useSessionStore } from "../stores/session";

const userStore = useUsersStore();
const sessionStore = useSessionStore();

const props = defineProps({
  workoutName: String,
});

const workoutList = userStore.getAllWorkouts(
  sessionStore.username,
  props.workoutName
);

// calculate stats
let maxWeight = 0;
workoutList.forEach((workout) => {
  if (workout.weight || 0 > maxWeight) {
    maxWeight = workout.weight || maxWeight;
  }
});
let avgWeight = 0;
workoutList.forEach((workout) => {
  avgWeight += workout.weight || 0;
});
avgWeight /= workoutList.length;
</script>

<template>
  <div class="block">
    <h1 class="title">{{ props.workoutName }}</h1>
    <div v-if="workoutList.length > 0" class="is-flex is-flex-direction-row">
      <p>
        <span>Total Workouts: </span>
        <span class="statVal">{{ workoutList.length }}</span>
      </p>
      <p>
        Max weight: <b>{{ maxWeight }} lbs.</b>
      </p>
    </div>
    <div v-else class="is-flex is-flex-direction-row">
      <p>No workouts found</p>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-right: 30px;
}

.block {
  border-bottom: 1px solid var(--white);
  margin-bottom: 70px !important;
  width: 90%;
  margin: auto;
}

.statVal {
  font-weight: bold;
}
</style>
