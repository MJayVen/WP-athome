<script setup lang="ts">
import { getUserWorkouts } from "@/stores/workouts";

const props = defineProps({
  followee: String,
});

const workouts = await getUserWorkouts(props.followee as string);
</script>

<template>
  <div class="block">
    <h1 class="title">{{ props.followee }}</h1>
    <ul v-if="workouts.length">
      <li v-for="workout in workouts">
        {{ workout.date }} - {{ workout.name }} - {{ workout.reps }} reps -
        {{ workout.weight }} lbs
      </li>
    </ul>
    <p v-else>No workouts found</p>
  </div>
</template>

<style scoped>
li {
  font-size: x-large;
  border-bottom: 1px solid var(--white);
}

p {
  font-size: large;
}

.block {
  border-left: 1px solid var(--white);
  padding: 30px;
  width: 90%;
  margin: auto;
  margin-bottom: 100px;
}
</style>
