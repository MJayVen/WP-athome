<script setup lang="ts">import type { Workout } from '@/stores/workouts';
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router';


const props = defineProps({
  workout: {
    type: Object as PropType<Workout>,
    required: true,
  }
});


</script>

<template>
    <div class="block is-flex is-justify-content-space-between">
      <RouterLink :to="`/workout/${props.workout?.id}`" class="workoutButton">
        <div class="workoutName is-size-4">{{ props.workout?.name }}</div>
        <div class="workoutInfo is-size-5">{{ props.workout?.reps }} reps / {{ props.workout?.weight }} lbs</div>
        <div class="workoutDate is-size-7">{{ props.workout?.date }}</div>
      </RouterLink>
      <div class="buttons is-flex is-flex-direction-row">
        <button class="button is-danger" @click="$emit('delete', props.workout?.id)">Delete</button>
      </div>
    </div>
</template>

<style scoped>

.block {
  border-top: 1px solid var(--white);
  min-height: 5rem;
  margin: 0 !important;
}
.workoutButton {
  display: block;
  text-decoration: none;
  width: 300px;
  height: 100%;
  max-height: 650px;
  padding: 1.5rem 0;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
}
.workoutButton:hover {
  text-decoration: none;
  background-color: var(--navy-blue-light);
}
.button {
  margin: 0 8px 0 0;
}
</style>
