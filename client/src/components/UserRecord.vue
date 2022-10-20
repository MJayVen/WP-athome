<script lang="ts">
import { useSessionStore } from '../stores/session';
import { User, useUsersStore } from '../stores/users';
import { ref } from 'vue';

export default {
    data() {
        return {
            userStore: useUsersStore(),
            curUser: useSessionStore().user,
            isFollowing: ref(false),
        }
    },
    props: ["user"],
    mounted() {
        // set isFollowing based on whether logged-in user is following or not
        this.isFollowing = this.userStore.getUser(this.curUser.username as string)?.following?.includes(this.user.username) || false;
    },
    methods: {
        follow() {
            if (this.curUser.username != this.user.username) {
                // add user to logged-in user's following list
                this.userStore.addFollow(this.curUser.username as string, this.user.username);
            } else {
                console.log("cant follow yourself, dingus");
            }
        },
        unfollow() {
            // remove user from logged-in user's following list
            this.userStore.deleteFollow(this.curUser.username as string, this.user.username);
        },
        deleteUser() {
            if (this.curUser.username != this.user.username) {
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
            <div v-if="user.username == curUser.username">
                <!-- Already logged in as user -->
                <button class="button is-success">You!</button>
            </div>
            <div v-else>
                <button class="button is-danger" @click="deleteUser">Delete User</button>
                <!-- Not-following -->
                <button v-if="!isFollowing" class="button is-warning"
                    @click="isFollowing = !isFollowing; follow()">
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
    text-decoration: underline;
    font-weight: bold;
    color: var(--white);
}

.button {
    width: 100px
}
</style>