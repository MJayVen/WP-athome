<script lang="ts">
import { useSessionStore } from "@/stores/session";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isActive: true,
      session: useSessionStore(),
    };
  },
  props: ["workout"],
});
</script>

<template>
    <div class="block is-flex is-justify-content-space-between">
      <RouterLink :to="`/workout/${workout.id}`" class="workoutButton">
        <div class="workoutName is-size-4">{{ workout.name }}</div>
        <div class="workoutInfo is-size-5">{{ workout.reps }} reps / {{ workout.weight }} lbs</div>
        <div class="workoutDate is-size-7">{{ workout.date }}</div>
      </RouterLink>
      <div class="buttons is-flex is-flex-direction-row">
        <button class="button is-danger" @click="$emit('delete', workout.id)">Delete</button>
      </div>
    </div>
</template>

<style scoped>
/* li {
  list-style: none;
} */
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
  color: var(--white);
}
.workoutButton:hover {
  text-decoration: none;
  background-color: var(--navy-blue-light);
}
.button {
  margin: 0 8px 0 0;
}
</style>
