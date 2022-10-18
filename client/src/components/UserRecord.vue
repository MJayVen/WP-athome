<script lang="ts">

export default {
    props: ["user"],
}

</script>

<template>
    <div class="block">
        <h1 class="title">{{ user.username }}</h1>
        <p>{{ (user.workouts||[]).length }} workouts</p>
        <div class="button is-danger">delete user</div>
    </div>
</template>

<style scoped>

</style>