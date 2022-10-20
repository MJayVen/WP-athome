<script lang="ts">
import { defineComponent } from "vue";
import AddWorkout from "../components/AddWorkout.vue";

// Collect workout ID from URL

export default defineComponent({
    data() {
        return {
            workoutId: this.$route.params.id[0],
        };
    },
    components: {
        AddWorkout,
    }
});

// pass workout ID to ExerciseList component

</script>
<template>
    <main>
        
        <AddWorkout :id="workoutId"/>
    </main>
</template>