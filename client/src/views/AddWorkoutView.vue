<script setup lang="ts">
import { useRoute } from "vue-router";
import AddWorkout from "../components/AddWorkout.vue";
import {useSessionStore} from "../stores/session";


// Collect workout ID from URL
const route = useRoute();
const workoutId = route.params.id;



</script>
<template>
    <main>
        <!-- pass workout ID to ExerciseList component -->
        <AddWorkout v-if="useSessionStore().loggedIn" id="workoutId"/>
        <h1 v-else class="title">Please log in or sign up</h1>
    </main>
</template>

<style scoped>
h1 {
    text-align: center;
}

</style>