<script setup lang="ts">
</script>
<template>
    <div class="block is-flex is-justify-content-space-between">
        <a class="setButton">Bench Press</a>
        <div class="buttons">
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
    .setButton {
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
    .setButton:hover {
        text-decoration: none;
        background-color: var(--navy-blue-light);
    }
    .button{
        margin: 0 8px 0 0;
    }
</style>