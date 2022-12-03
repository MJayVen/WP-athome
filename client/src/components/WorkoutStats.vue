<script setup lang="ts">
import workoutList from "@/stores/workouts";

const props = defineProps({
  workoutName: String,
});

const subWorkoutList = workoutList.filter((workout) => {
  return workout.name == props.workoutName;
});

// calculate stats
let maxWeight = 0;
subWorkoutList.forEach((workout) => {
  if (workout.weight || 0 > maxWeight) {
    maxWeight = workout.weight || maxWeight;
  }
});
let avgWeight = 0;
subWorkoutList.forEach((workout) => {
  avgWeight += workout.weight || 0;
});
avgWeight /= subWorkoutList.length;
</script>

<template>
  <div class="block">
    <h1 class="title">{{ props.workoutName }}</h1>
    <div v-if="subWorkoutList.length" class="is-flex is-flex-direction-row">
      <p>
        <span>Total Workouts: </span>
        <span class="statVal">{{ subWorkoutList.length }}</span>
      </p>
      <p>
        Max weight: <b>{{ maxWeight }} lbs.</b>
      </p>
      <p>
        Average weight: <b>{{ avgWeight }} lbs.</b>
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
