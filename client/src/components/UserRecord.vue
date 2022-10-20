<script lang="ts">
import { useSessionStore } from '../stores/session';
import { User, useUsersStore } from '../stores/users';
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
        // set isFollowing based on whether logged-in user is following or not
        this.isFollowing = this.userStore.getUser(this.curUser as string)?.following?.includes(this.user.username) || false;
    },
    methods: {
        follow() {
            // add user to logged-in user's following list
            this.userStore.addFollow(this.curUser as string, this.user.username);
        },
        unfollow() {
            // remove user from logged-in user's following list
            this.userStore.deleteFollow(this.curUser as string, this.user.username);
        },
        deleteUser() {
            if (this.user.username != this.curUser){
                this.userStore.deleteUser(this.user.username);
            } else {
                console.log("cant delete yourself, ya silly goof")
            }
        }
    }
}

</script>

<template>
    <div class="block">
        <h1 class="title">@{{ user.username }} - {{ (user.workouts||[]).length }} workouts</h1>
        <div class="buttons is-flex is-justify-content-space-around is-flex-wrap-nowrap">
            <button class="button is-danger" @click="deleteUser">Delete User</button>
            <!-- Not-following -->
            <button v-if="!isFollowing" class="button is-warning" @click="isFollowing = !isFollowing; follow()"> Follow </button>
            <!-- Following -->
            <button v-else class="button" @click="isFollowing = !isFollowing; unfollow();"> Followed! </button>
        </div>
        
    </div>
</template>

<style scoped>

.block {
    border: 1px solid var(--white);
    border-radius: 5px;
    padding: 10px;
    /* width: 400px; */
}

h1 { 
    text-decoration: underline;
    font-weight: bold;
    color: var(--white);
}

.button {
    width: 100px
}

</style>