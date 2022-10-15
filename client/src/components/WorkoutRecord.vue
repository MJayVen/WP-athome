<script lang="ts">

export default {
  props: ['date', 'exercises'],
  mounted() {
    // console.log(this.date);
  }
};

</script>


<template>
    <div class="block is-flex is-justify-content-space-between">
        <a class="workoutButton">{{ date }} - {{ exercises.length }} exercises</a>
        <div class="buttons is-flex is-flex-direction-row">
            <a href="#" class="button is-danger">Delete</a>
      </div>
    </div>
</template>

<style scoped>
    .block{
        border-top: 1px solid var(--white);
        min-height: 5rem;
        margin: 0 !important;
    }
    .workoutButton {
        display: block;
        text-decoration: none;
        width:300px;
        height: 100%;
        padding: 1.5rem 0;
        text-align: center;
        font-weight: bold;
        font-size: 1.25rem;
        color: var(--white); 
    }
    .workoutButton:hover {
        text-decoration: none;
        background-color: var(--navy-blue-light);
    }
    .button{
        margin: 0 8px 0 0;
    }
    
</style>