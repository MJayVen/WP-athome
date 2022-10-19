<script lang="ts">
import { useSessionStore } from "@/stores/session";

export default {
  data() {
    return {
      isActive: true,
      session: useSessionStore(),
    };
  },
  props: ["workout"],
  // methods: {
  //   delete() {
      
  //     // this.$emit('delete');
  //   },
  // }
};
</script>

<template>
  <li>
    <div class="block is-flex is-justify-content-space-between">
      <RouterLink :to="`/workout/${workout.id}`" class="workoutButton">
        <i>{{ workout.date }}</i> - {{ workout.name }} - {{ workout.details }}
      </RouterLink>
      <div class="buttons is-flex is-flex-direction-row">
        <button class="button is-danger" @click="$emit('delete', workout.id)">Delete</button>
      </div>
    </div>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}
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
