<script setup lang="ts">
const props = defineProps({
  workoutName: String,
});
// test data for now
const workoutList = [
  {
    date: "2021-04-01",
    name: "Squats",
    reps: 5,
    weight: 135,
  },
  {
    date: "2021-04-02",
    name: "Squats",
    reps: 5,
    weight: 145,
  },
  {
    date: "2021-04-03",
    name: "Squats",
    reps: 5,
    weight: 155,
  },
  {
    date: "2021-04-04",
    name: "Squats",
    reps: 5,
    weight: 165,
  },
  {
    date: "2021-04-05",
    name: "Squats",
    reps: 5,
    weight: 175,
  },
  {
    date: "2021-04-06",
    name: "Squats",
    reps: 5,
    weight: 185,
  },
  {
    date: "2021-04-07",
    name: "Squats",
    reps: 5,
    weight: 195,
  },
  {
    date: "2021-04-08",
    name: "Squats",
    reps: 5,
    weight: 205,
  },
  {
    date: "2021-04-09",
    name: "Squats",
    reps: 5,
    weight: 215,
  },
  {
    date: "2021-04-10",
    name: "Squats",
    reps: 5,
    weight: 225,
  },
  {
    date: "2021-04-11",
    name: "Squats",
    reps: 5,
    weight: 235,
  },
  {
    date: "2021-04-12",
    name: "Squats",
    reps: 5,
    weight: 245,
  },
  {
    date: "2021-04-13",
    name: "Squats",
    reps: 5,
    weight: 255,
  },
  {
    date: "2021-04-14",
    name: "Squats",
    reps: 5,
    weight: 265,
  },
];

let maxWeight = 0;
workoutList.forEach((workout) => {
  if (workout.weight > maxWeight) {
    maxWeight = workout.weight;
  }
});
</script>

<template>
  <div class="block">
    <h1 class="title">{{ props.workoutName }}</h1>
    <div class="is-flex is-flex-direction-row">
      <p>Total Workouts: {{ workoutList.length }}</p>
      <p>Max weight: {{ maxWeight }}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: var(--white);
}

p {
  color: var(--white);
  margin-right: 30px;
}

.block {
  border-bottom: 1px solid var(--white);
  margin-bottom: 70px !important;
  width: 90%;
  margin: auto;
}
</style>
