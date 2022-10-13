<script setup lang="ts">
import session, { login, logout } from '../stores/session';
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-dark" @click="login('Mark','Venuto')">
            Log in
        </a>
        <a class="button is-light">
            Sign up
        </a>
    </div>
    <div v-else>
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
                {{ session.user.firstName }} {{ session.user.lastName }}
            </a>
            <div class="navbar-dropdown">
                <a class="navbar-item" href="#">
                    Profile
                </a>
                <a class="navbar-item">
                    Friends
                </a>
                <a class="navbar-item">
                    Settings
                </a>
            </div>
        </div>
        <!-- <div class="navbar-item"> -->
            <a class="navbar-item button is-light" @click="logout();">
                Logout
            </a>
        <!-- </div> -->
    </div>

</template>

<style scoped>

</style>