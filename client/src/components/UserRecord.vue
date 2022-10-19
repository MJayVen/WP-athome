<script lang="ts">
import { useSessionStore } from '../stores/session';
import { useUsersStore } from '../stores/users';
import { ref } from 'vue';

export default {
    data() {
        const userStore = useUsersStore();
        return{
            userStore: userStore,
            curUser: useSessionStore().getUsername,
            isFollowing: ref(false),
        }
    },
    props: ["user"],
    mounted() {
        this.isFollowing = this.userStore.getUser(this.curUser as string).following.find()
    }
}

</script>

<template>
    <div class="block">
        <h1 class="title">{{ user.username }}</h1>
        <p>{{ (user.workouts||[]).length }} workouts</p>
        <div class="button is-danger">delete user</div>
        <div class="button is-warning">add follower</div>
    </div>
</template>

<style scoped>

</style>