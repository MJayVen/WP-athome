<script setup lang="ts">
  import WorkoutList from '../components/WorkoutList.vue';
</script>

<template>
  <div class="container">
    <WorkoutList />
  </div>
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
</style>