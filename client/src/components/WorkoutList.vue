<script setup lang="ts">
import WorkoutRecord from './WorkoutRecord.vue';
</script>

<template>
    <div class="container is-flex is-flex-direction-row is-flex-wrap-wrap-reverse is-justify-content-center">
        <div id="workoutList" class="box">
            <div class="content is-flex is-flex-direction-column">
                <h3 class="has-text-white">Previous Workouts:</h3>
            </div>
            <WorkoutRecord />
            <WorkoutRecord />
            <WorkoutRecord />
            <WorkoutRecord />
            <WorkoutRecord />
        </div>
        <div id="workoutListOptions" class="block is-flex is-flex-direction-column is-flex-align-content-center">
            <span>Between:</span>
            <div class="field is-flexbox is-flex-direction-column">
                <input type="date" class="input">
                <input type="date" class="input">
            </div>

            <a href="/workout" class="button is-success">Add a workout +</a>
            <a href="#" class="button is-warning">View Analytics</a>
        </div>
    </div>


</template>

<style scoped>
h3 {
    padding: 1rem;
}

#workoutList {
    background-color: var(--navy-blue-dark);
    border: 1px solid var(--white);
    border-radius: 5px;
    padding: 0;
    min-width: 50%;
    width: 75%;
    margin-right: 10px;
}

#workoutListOptions {
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