<script setup lang="ts">
import session from "@/stores/session";
import AddWorkout from "../components/AddWorkout.vue";

</script>
<template>
    <main>
        <!-- pass workout ID to ExerciseList component -->
        <AddWorkout v-if="session"/>
        <h1 v-else class="title">Please log in or sign up</h1>
    </main>
</template>

<style scoped>
h1 {
    text-align: center;
}

</style>