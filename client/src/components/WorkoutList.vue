<!-- TODO: should take in a userid and lists their workouts. this allows user to look at friend's previous workouts -->

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, watch } from "vue";
import WorkoutRecord from "./WorkoutRecord.vue";

const workouts = ref([{
    id: 1,
    date: "2021-01-01",
    exercises: [
      {
        id: 1,
        name: "Exercise 1",
        sets: [
          {
            id: 1,
            reps: 10,
            weight: 100,
          },
        ],
      },
    ],
  }
]);
localStorage.setItem("workouts", JSON.stringify(workouts.value));

watch(workouts.value, (newVal) => {
  localStorage.workouts = JSON.stringify(newVal);
}), { deep: true };

const workoutDate = ref("");

const addWorkout = () => {
  workouts.value.push({
    id: workouts.value.length + 1,
    date: workoutDate.value,
    exercises: [],
  });
  console.log(workouts.value);
  workoutDate.value = "";
  console.log("workout added")
};

// const workoutlist = computed(() => {
//   return workouts.value;
// });

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
      <form @submit.prevent="addWorkout">
        <div class="field">
          <label class="label has-text-white">Date</label>
          <div class="control">
            <input
              class="input"
              type="date"
              placeholder="Date"
              v-model="workoutDate"
            />
          </div>
        </div>
        <input type="submit" value="Add workout" class="button is-link"/>
      </form>
      <ul>
        <li v-for="workout in workouts">{{workout.date}}</li>
      </ul>
      <!-- <WorkoutRecord
        v-if="workouts != null"
        v-for="workout in workouts"
        :workoutid="workout.id"
        :date="workout.date"
        :exercises="workout.exercises"
        @delete="deleteWorkout"
      /> -->
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

      <RouterLink to="/workout/1" class="button is-success">
        Add a workout +
      </RouterLink>
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
