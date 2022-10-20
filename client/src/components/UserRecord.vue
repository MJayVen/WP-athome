<script setup lang="ts">
import { useSessionStore } from '../stores/session';
import { User, useUsersStore } from '../stores/users';
import { ref, defineComponent } from 'vue';

const usersStore = useUsersStore();
const curUser = useSessionStore();

const props = defineProps({
    user: User
});

// check is logged in user is following listed user
const isFollowing = ref(usersStore.isFollowing(curUser.username as string, props.user?.username as string));

function follow() {
    if (curUser.username != props.user?.username) {
        // add user to logged-in user's following list
        usersStore.addFollow(curUser.username as string, props.user?.username as string);
    } else {
        console.log("cant follow yourself, dingus :P");
    }
}
function unfollow() {
    // remove user from logged-in user's following list
    usersStore.deleteFollow(curUser.username as string, props.user?.username as string);
}
function deleteUser() {
    console.log("this is " + curUser.username + " and i am deleting " + props.user?.username);
    if (curUser.username != props.user?.username) {
        usersStore.deleteUser(props.user?.username as string);
    } else {
        console.log("cant delete yourself, ya silly goof XD")
    }
}

</script>

<template>
    <div class="block">
        <h1 class="title"><i>{{ user?.username }}</i> - {{ (user?.workouts||[]).length }} workouts</h1>
        <div class="buttons is-flex is-justify-content-space-around is-flex-wrap-nowrap">
            <div v-if="user?.username == curUser.username">
                <!-- Already logged in as user -->
                <button class="button is-success">You!</button>
            </div>
            <div v-else>
                <button class="button is-danger" @click="deleteUser">Delete User</button>
                <!-- Not-following -->
                <button v-if="!isFollowing" class="button is-warning" @click="isFollowing = !isFollowing; follow()">
                    Follow </button>
                <!-- Following -->
                <button v-else class="button" @click="isFollowing = !isFollowing; unfollow();"> Following </button>
            </div>

        </div>

    </div>
</template>

<style scoped>
.block {
    border: 1px solid var(--white);
    border-radius: 5px;
    padding: 10px;
    width: 600px;
}

h1 {
    font-weight: bold;
    color: var(--white);
}

.button {
    width: 100px
}
</style>