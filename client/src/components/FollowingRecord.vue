<script setup lang="ts">
import { useUsersStore } from "../stores/users";

const usersStore = useUsersStore();

const props = defineProps({
  user: String,
});

const workouts = usersStore.getAllWorkouts(props.user as string);
</script>

<template>
  <div class="block">
    <h1 class="title">{{ props.user }}</h1>
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
h1 {
  color: var(--white);
}

li {
  color: var(--white);
  font-size: x-large;
  border-bottom: 1px solid var(--white);
}

p {
  color: var(--white);
  font-size: large;
}

.block {
  border-left: 1px solid var(--white);
  padding: 30px;
  width: 90%;
  margin:auto;
  margin-bottom: 100px;
}
</style>
