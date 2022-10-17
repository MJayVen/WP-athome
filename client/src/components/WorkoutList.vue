<!-- TODO: should take in a userid and lists their workouts. this allows user to look at friend's previous workouts -->

<script setup lang="ts">
import { ref } from "vue";
import WorkoutRecord from "./WorkoutRecord.vue";



const workoutDate = ref("2022-01-01");


</script>

<!-- the box containing the list of previous workouts -->
<template>
  <div
    class="container is-flex is-flex-direction-row is-flex-wrap-wrap-reverse is-justify-content-center"
  >
    <div id="workoutList" class="box">
      <div class="content is-flex is-flex-direction-column">
        <h3 class="has-text-white">date1-date2</h3>
      </div>
      <!-- <ul>
        <WorkoutRecord
          v-for="workout in session.workouts"
          :workout="workout"
          :key="workout.id"
          @delete="deleteWorkout"
        />
      </ul> -->

      <!-- <h3 class="title" v-else>Click "Add a workout"</h3> -->
    </div>
    <div
      id="workoutListOptions"
      class="block is-flex is-flex-direction-column is-flex-align-content-center"
    >
      <span>Between:</span>
      <div class="field is-flexbox is-flex-direction-column">
        <input type="date" class="input" />
        <input type="date" class="input" />
      </div>
      <!-- Pass new workout id to new workout -->
      <!-- <RouterLink :to="`/workout/${getNewWorkoutId()}`" class="button is-success">
        Add a workout +
      </RouterLink> -->
      <a class="button is-warning">View Analytics</a>
    </div>
  </div>
  <!-- <div v-else class="container">
    <h3 class="title">Please Login First</h3>
  </div> -->
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
