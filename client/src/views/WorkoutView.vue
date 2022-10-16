<script lang="ts">
import WorkoutDetails from '../components/WorkoutDetails.vue'

export default {
    data() {
        return {
            workoutId: '',
        };
    },
    created() {
        this.workoutId = this.$route.params.id[0];
    },
    components: {
        WorkoutDetails,
    }
};

</script>
<template>
    <main>
        <WorkoutDetails :id="workoutId"/>
    </main>
</template>