<script setup lang="ts">
import WorkoutStats from "../components/WorkoutStats.vue";

// TODO: change this list to workout names existing in curUser's workout list
const workoutNames = [
    'Squats',
    'Bench Press',
    'Deadlifts',
    'Overhead Press',
    'Barbell Rows',
]

</script>

<template>
    <WorkoutStats v-for="workoutName in workoutNames" :workoutName="workoutName"></WorkoutStats>
</template>

<style scoped>

</style>