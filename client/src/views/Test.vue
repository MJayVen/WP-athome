<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUsersStore, type User } from "../stores/users";

export default defineComponent({
    setup() {
        const users = useUsersStore();

        const username = ref('');
        const password = ref('');

        const addUser = () => {
            users.addUser(username.value, password.value);
        }

        return { users, username, password, addUser };
    },
});
</script>

<template>
    <form @submit.prevent="addUser" class="form">
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input" type="text" placeholder="Username" v-model="username">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="text" placeholder="Password" v-model="password">
            </div>
        </div>
        <button type="submit">add user</button>
    </form>

    <ul>
        <li v-for="user in users.getAllUsers">
            {{ user.username }}
        </li>
    </ul>
</template>

<style scoped>

</style>