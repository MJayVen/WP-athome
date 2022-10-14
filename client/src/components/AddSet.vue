<script lang="ts"> // <-- no setup keyword used, necessary to use export default...
export default {
    data() {
        weight: number
    }
}

</script>

<template>
    <div class="block">
        <div class="field">
            <label class="label">Exercise</label>
            <div class="control">
                <div class="select">
                    <!-- <select v-model="selectedExercise"> -->
                    <select>
                        <option>
                        <!-- <option v-for="exercise in exercises" :key="exercise.id" :value="exercise.id"> -->
                            <!-- {{ exercise.name }} -->
                            hello
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="field">
            <label class="label">Weight</label>
            <div class="control">
                <input class="input" type="number" placeholder="Weight" v-model="weight"/>
                <!-- <input class="input" type="number" placeholder="Weight" v-model="weight" /> -->
            </div>
        </div>
        <div class="field">
            <label class="label">Reps</label>
            <div class="control">
                <input class="input" type="number" placeholder="Reps" />
                <!-- <input class="input" type="number" placeholder="Reps" v-model="reps" /> -->
            </div>
        </div>
        <div class="field">
            <label class="label">Notes</label>
            <div class="control">
                <textarea class="textarea" placeholder="Notes" ></textarea>
                <!-- <textarea class="textarea" placeholder="Notes" v-model="notes"></textarea> -->
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Add Set</button>
                <!-- <button class="button is-link" @click="addSet">Add Set</button> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
    .block {
        width: 20%;
    }
    label{
        color: var(--white);
    }
</style>