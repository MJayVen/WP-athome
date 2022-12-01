<script setup lang="ts">
import session from '@/stores/session';
import WorkoutList from '../components/WorkoutList.vue';

</script>

<template>
  <div v-if="session.user" class="container">
    <WorkoutList />
  </div>
  <h1 v-else class="title">Please log in or sign up</h1>
</template>

<style scoped>
.block {
  min-height: 40px;
  margin: 0 !important;
}

.field .input {
  width: 150px !important;
  margin: 0 0 0 8px;
}

h1 {
  text-align: center;
}
</style>