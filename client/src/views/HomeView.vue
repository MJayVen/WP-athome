<script setup lang="ts">
  import WorkoutList from '../components/WorkoutList.vue';
  import { useSessionStore } from '../stores/session';
</script>

<template>
  <div v-if="useSessionStore().loggedIn" class="container">
    <WorkoutList />
  </div>
  <h1 v-else class="title">Please log in or sign up</h1>
</template>

<style scoped>
  .block{
    min-height: 40px;
    margin: 0 !important;
  }
  .field .input{
    width: 150px !important;
    margin: 0 0 0 8px;
  }
  h1 {
    text-align: center;
  }
</style>