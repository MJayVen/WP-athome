<script setup lang="ts">
    import WorkoutRecord from './WorkoutRecord.vue';
</script>

<template>
    <div class="box">
        <div class="content is-flex is-flex-direction-column">
            <h3 class="has-text-white">Previous Workouts:</h3>
        </div>
        <WorkoutRecord />
        <WorkoutRecord />
        <WorkoutRecord />
        <WorkoutRecord />
        <WorkoutRecord />
    </div>
</template>

<style scoped>
    .box {
        background-color: var(--navy-blue-dark);
        border: 1px solid var(--white);
        border-radius: 5px;
        padding: 0;
    }
    h3 {
        padding: 1rem;
    }
</style>