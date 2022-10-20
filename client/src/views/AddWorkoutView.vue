<script setup lang="ts">
import { useRoute } from "vue-router";
import AddWorkout from "../components/AddWorkout.vue";

// Collect workout ID from URL

const route = useRoute();
const workoutId = route.params.id;

// pass workout ID to ExerciseList component

</script>
<template>
    <main>
        <AddWorkout :id="workoutId"/>
    </main>
</template>