<script setup lang="ts">
  import WorkoutList from './WorkoutList.vue';
</script>

<template>
  <div class="container">
    <div class="block is-flex is-flex-direction-row is-justify-content-space-between">
      <div class="buttons">
        <a href="#" class="button is-success">Add a workout +</a>
        <a href="#" class="button is-warning">View Analytics</a>
      </div>

      <div class="field is-grouped is-flex-wrap-wrap">
        <input type="date" class="input">
        <input type="date" class="input">
      </div>
    </div>

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
