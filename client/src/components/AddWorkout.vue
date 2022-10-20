<script lang="ts">
import { useUsersStore } from "../stores/users"
import { useSessionStore } from "../stores/session"
import { defineComponent, ref, type Ref } from "vue";
import router from "@/router";
// import RouterLink from "vue-router";

export default defineComponent({
    data() {
        const id = parseInt(this.$route.params.id as string)
        const curUser = useSessionStore().getSessionUser;
        const workout = useUsersStore().getWorkout(curUser!.username as string, id);
        // workout already exists
        if (workout) {
            return {
                id: parseInt(this.$route.params.id as string) as number,
                name: ref(workout.name) as Ref<string>,
                weight: ref(workout.weight) as Ref<number>,
                reps: ref(workout.reps) as Ref<number>,
                date: ref(workout.date) as Ref<string>,
                curUsername: curUser?.username as string,
                workoutNames: [
                    "Squats",
                    "Bench Press",
                    "Deadlift",
                    "Overhead Press",
                    "Barbell Row",
                ] as string[],
            }
        } else {
            return {
                id: parseInt(this.$route.params.id as string),
                name: ref("Squats"),
                weight: ref(30),
                reps: ref(10),
                date: ref(''),
                curUsername: curUser?.username,
                workoutNames: [
                    "Squats",
                    "Bench Press",
                    "Deadlift",
                    "Overhead Press",
                    "Barbell Row",
                ]
            }
        }
    }, methods: {
        submit() {
            if (this.curUsername) {
                useUsersStore().addWorkout(this.curUsername, { id: this.id, name: this.name, weight: this.weight, reps: this.reps, date: this.date })
                router.push('/');
            }
        },
    }
});

</script>

<template>
    <form @submit.prevent="submit()">
        <h1 class="title">Add a Workout!</h1>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <div class="select">
                    <select required v-model="name">
                        <option v-for="workoutName in workoutNames" :key="workoutName" :value="workoutName">
                            {{ workoutName }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="field">
            <label class="label">Weight (lbs)</label>
            <div class="control numOptions">
                <button type="button" class="button is-success leftBtn" @click="weight=Math.max(0, weight!-5)">-</button>
                <input required class="input" type="number" max="999" v-model="weight">
                <button type="button" class="button is-success rightBtn" @click="weight! += 5">+</button>
            </div>
        </div>
        <div class="field">
            <label class="label">Reps</label>
            <div class="control numOptions">
                <button type="button" class="button is-success leftBtn" @click="reps=Math.max(0, reps!-1)">-</button>
                <input required class="input" type="number" max="999" v-model="reps">
                <button type="button" class="button is-success rightBtn" @click="reps! += 1">+</button>
            </div>
        </div>
        <div class="field">
            <label class="label">Date</label>
            <div class="control dateOptions">
                <input required class="input" type="date" v-model="date" />
            </div>
        </div>
        <input type="submit" value="Submit" class="button is-link" />
    </form>
</template>

<style scoped>
/* Remove num input up/down arros */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}

label,
h1 {
    color: var(--white)
}

/* form itself */
form {
    background-color: var(--navy-blue-light);
    border-radius: 5px;
    padding: 1rem;
    width: 90%;
    margin: auto;
}

/* num input box */
.numOptions input {
    width: 3.5rem;
    text-align: center;
    border-radius: 0 !important;
}

/* +/- buttons */
.button {
    color: var(--white);
    font-weight: bold;
    border-radius: 5px;
    border: none;
}

.button:hover {
    color: var(--white)
}

.leftBtn {
    border-radius: 5px 0 0 5px;
}

.rightBtn {
    border-radius: 0 5px 5px 0;
}

.dateOptions input {
    width: 10rem;
}
</style>