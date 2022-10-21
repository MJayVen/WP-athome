<script setup lang="ts">
import {useSessionStore} from "../stores/session";
import {useUsersStore}  from "../stores/users";

// stores
const sessionStore = useSessionStore();
const usersStore = useUsersStore();

// computed
const curUser = sessionStore.getUser;
const followList = usersStore.getFollowList(curUser?.username as string);

</script>

<template>
    <div>
        <h1>FOLLOW LIST SOON TO COME</h1>
    </div>
</template>

<style scoped>

</style>