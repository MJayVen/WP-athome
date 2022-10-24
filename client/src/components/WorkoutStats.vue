<script setup lang="ts">
import { useUsersStore } from '../stores/users';
import { useSessionStore } from '../stores/session';

const userStore = useUsersStore();
const sessionStore = useSessionStore();

const props = defineProps({
  workoutName: String,
  searchVal: String
});
// test data for now

const workoutList = useUsersStore().getAllWorkouts(sessionStore.username, props.workoutName);

let maxWeight = 0;
workoutList.forEach((workout) => {
  if (workout.weight || 0 > maxWeight) {
    maxWeight = workout.weight || maxWeight;
  }
});
</script>

<template>
  <div v-if="props.workoutName == props.searchVal || props.searchVal == ''" class="block">
    <h1 class="title">{{ props.workoutName }}</h1>
    <div v-if="workoutList.length > 0" class="is-flex is-flex-direction-row">
        <p>Total Workouts: {{ workoutList.length }}</p>
        <p>Max weight: {{ maxWeight }}</p>
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
</style>
