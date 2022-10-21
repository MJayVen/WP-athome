<script setup lang="ts">
import WorkoutRecord from "./WorkoutRecord.vue";
import { useUsersStore, type User } from "../stores/users";
import { useSessionStore } from "../stores/session";
import { defineComponent } from "vue";

const usersStore = useUsersStore();
const curUser = useSessionStore().getUser;

function deleteWorkout(id: number) {
  usersStore.deleteWorkout(curUser?.username as string, id);
};
</script>

<!-- the box containing the list of previous workouts -->
<template>
  <div class="container is-flex is-flex-direction-row is-flex-wrap-wrap-reverse is-justify-content-center">
    <div id="workoutList" class="box">
      <div v-if="(curUser!.workouts || []).length > 0" class="content is-flex is-flex-direction-column">
        <h1 class="has-text-white">List of previous workouts:</h1>
        <WorkoutRecord v-for="workout in curUser!.workouts" :workout="workout" @delete="deleteWorkout" />
      </div>
      <h1 class="title" v-else>Click "Add a workout"</h1>
    </div>
    <div id="workoutListOptions" class="block is-flex is-flex-direction-column is-flex-align-content-center">
      <!-- Pass new workout id to new workout -->
      <RouterLink :to="`/workout/${usersStore.newWorkoutId(curUser!.username as string)}`" class="button is-success">
        Add a workout +
      </RouterLink>
      <RouterLink to='/analyze' class="button is-warning">Stats</RouterLink>
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding: 1rem;
  color: var(--white);
  text-align: center;
}

#workoutList {
  margin-bottom: auto;
  background-color: var(--navy-blue-dark);
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 0;
  min-width: 50%;
  width: 75%;
  margin-right: 10px;
}

#workoutListOptions {
  margin-bottom: auto;
  max-width: 150px;
  margin-bottom: 10px;
  color: var(--white);
}

.field .input {
  width: 150px !important;
  margin: 0 8px 0 0;
}

a {
  margin: 0 0 8px 0;
}
</style>
