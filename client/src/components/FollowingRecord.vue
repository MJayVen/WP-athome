<script setup lang="ts">
import type { User } from '@/stores/users';
import { getWorkoutsById } from '@/stores/workouts';
import type { PropType } from 'vue';


const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  }
});

const followerWorkouts = getWorkoutsById(1);
</script>

<template>
  <div class="block">
    <h1 class="title">{{ props.user }}</h1>
    <ul v-if="followerWorkouts.length">
      <li v-for="workout in followerWorkouts">
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
  margin:auto;
  margin-bottom: 100px;
}
</style>
