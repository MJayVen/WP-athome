<script lang="ts">
export default {
  data() {
    return {
      isActive: true,
    };
  },
  props: ["workout"],
  methods: {
    deleteWorkout() {
      this.$emit("delete", this.workout); // emit id of workout to be deleted
      this.isActive = false; // stop rendering component
    },
  },
};
</script>

<template>
  <li>
    <div
      v-if="isActive"
      :class="{ 'is-active': isActive }"
      class="block is-flex is-justify-content-space-between"
    >
      <RouterLink :to="`/workout/${workout.id}`" class="workoutButton">
        {{ workout.date }} - {{ workout.exercises.length }} exercises
      </RouterLink>
      <div class="buttons is-flex is-flex-direction-row">
        <a class="button is-danger" @click="deleteWorkout">Delete</a>
      </div>
    </div>
  </li>
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
