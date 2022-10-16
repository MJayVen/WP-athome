<script lang="ts">
// <-- no setup keyword used, necessary to use export default...

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      weight: 30,
      reps: 10,
      note: "",
      exercises: [
        {
          name: "Bench Press",
          id: 1,
        },
        {
          name: "Squat",
          id: 2,
        },
        {
          name: "Deadlift",
          id: 3,
        },
        {
          name: "Overhead Press",
          id: 4,
        },
        {
          name: "Bent Over Row",
          id: 5,
        }
      ],
      selectedExercise: 1,
    };
  },
  methods: {
    incrementFive() {
      this.weight += 5;
    },
    decrementFive() {
      this.weight -= 5;
      if (this.weight < 0) {
        this.weight = 0;
      }
    },
    incrementOne() {
      this.reps += 1;
    },
    decrementOne() {
      this.reps -= 1;
      if (this.reps < 0) {
        this.reps = 0;
      }
    },
    
  },
});
</script>

<template>
  <div class="block">
    <div class="field">
      <label class="label">Exercise</label>
      <div class="control">
        <div class="select">
          <select v-model="selectedExercise">
            <option
              v-for="exercise in exercises"
              :key="exercise.id"
              :value="exercise.id"
            >
              {{ exercise.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Weight (lbs.)</label>
      <div class="control is-flex is-flex-direction-row">
        <a class="button changeVal left" @click="decrementFive()">-</a>
        <input class="input weightVal" type="number" v-model="weight" />
        <a class="button changeVal right" @click="incrementFive()">+</a>
      </div>
    </div>
    <div class="field">
      <label class="label">Reps</label>
      <div class="control">
        <a class="button changeVal left" @click="decrementOne()">-</a>
        <input class="input" type="number" placeholder="Reps" v-model="reps" />
        <a class="button changeVal right" @click="incrementOne()">+</a>
      </div>
    </div>
    <div class="field">
      <label class="label">Notes</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Notes"
          v-model="note"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button">Add Set</button>
        <!-- <button class="button is-link" @click="addSet">Add Set</button> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
/* prevents up/down arrows from showing up */
.control :deep(input[type="number"]) {
  -moz-appearance: textfield;
}
.control :deep(input::-webkit-outer-spin-button),
.control :deep(input::-webkit-inner-spin-button) {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
/* width of component */
.block {
  width: 20%;
}
/* date */
label {
  color: var(--white);
}
/* exercise number inputs */
.input {
  width: 50%;
  border-radius: 0;
  text-align: center;
  font-weight: bolder;
  font-size: 2rem;
}
/* +/- buttons */
.changeVal {
  background-color: var(--dark-blue);
  color: var(--white);
  padding: 0;
  font-size: 2rem;
  border: none;
  width: 25%;
  height: 5rem;
}
.changeVal:hover {
  color: var(--white);
}
.changeVal.left {
  border-radius: 5px 0 0 5px;
}
.changeVal.right {
  border-radius: 0 5px 5px 0;
}
</style>
