<script setup lang="ts">
import WorkoutRecord from "./WorkoutRecord.vue";
import { useUsersStore, type User } from "../stores/users";
import { useSessionStore } from "../stores/session"

const users = useUsersStore();
const session = useSessionStore();
const workouts = (session.user || [] as User).workouts

useUsersStore().addWorkout('a', {id:1, name:"test", details:"test", date:'test'})

console.log(workouts);

</script>

<!-- the box containing the list of previous workouts -->
<template>
  <div v-if="session.user" class="container is-flex is-flex-direction-row is-flex-wrap-wrap-reverse is-justify-content-center">
    <div id="workoutList" class="box">
      <div v-if="(session.user.workouts || []).length > 0" class="content is-flex is-flex-direction-column">
        <h3 class="has-text-white">List of previous workouts:</h3>
        <WorkoutRecord v-for="workout in workouts" :workout="workout"/>
      </div>
      <h3 class="title" v-else>Click "Add a workout"</h3>
    </div>
    <div
      id="workoutListOptions"
      class="block is-flex is-flex-direction-column is-flex-align-content-center"
    >
      <!-- Pass new workout id to new workout -->
      <RouterLink :to="`/workout/${users.newWorkoutId(session.user.username as string)}`" class="button is-success">
        Add a workout +
      </RouterLink>
      <a class="button is-warning">View Analytics</a>
    </div>
  </div>
  <div v-else class="container">
    <h3 class="title">Please Login</h3>
  </div>
</template>

<style scoped>
h3 {
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
  max-height: 40vw;
  overflow-y: auto;
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
