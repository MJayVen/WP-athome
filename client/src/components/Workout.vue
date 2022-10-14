<script setup lang="ts">

import { ref } from 'vue';
import AddSet from "./AddSet.vue";
// import SetRecord from "./SetRecord.vue";

let isActive = ref(false);
</script>

<template>
  <div
    class="container is-flex is-flex-direction-row is-flex-wrap-wrap-reverse is-justify-content-center"
  >
    <div class="box">
      <aside class="menu">
        <h3 class="title">10/14/22 (today)</h3>
        <p class="menu-label">Exercises</p>
        <ul class="menu-list">
          <li>
            <a :class="{ 'is-active':isActive }" @click="isActive = !isActive">Bench Press - 3 sets</a>
            <ul class="repList" :class="{ 'is-active':isActive }">
              <li :class=" {'is-hidden':!isActive } "><a>5 reps @ 150lbs</a></li>
              <li :class=" {'is-hidden':!isActive } "><a>5 reps @ 150lbs</a></li>
              <li :class=" {'is-hidden':!isActive } "><a>5 reps @ 150lbs</a></li>
            </ul>
          </li>
          <li><a>Customers</a></li>
        </ul>
      </aside>
    </div>
    <AddSet />
  </div>
</template>

<style scoped>
.box {
  background-color: var(--navy-blue-dark);
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 20px;
  width: 75%;
  margin-right: 1rem;
}
.menu-label {
  color: var(--white);
  font-size: large;
}
h3{
  color: var(--white);
}
a {
    background-color: none !important;
    color: var(--white) !important;
}
a:hover {
  background-color: var(--navy-blue-light) !important;
}
</style>
