<script setup lang="ts">
import { ref } from 'vue';
import LoginBadge from './LoginBadge.vue';
let isActive = ref(false); // reactive variable
</script>

<template>
    <nav class="navbar is-dark has-text-weight-light mb-5" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="../assets/logo.png">
                </a>

                <a :class="{ 'is-active':isActive }" @click="isActive = !isActive" role="button" class="navbar-burger"
                    aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="myNavbar" class="navbar-menu" :class="{ 'is-active':isActive }">
                <!-- <div class="navbar-start">
                <div class="navbar-item">
                    <a href="/#" class="button is-success text">
                        Add a workout +
                    </a>
                </div>
            </div> -->

                <div class="navbar-end">
                    <!-- <div class="navbar-item"> -->
                        <LoginBadge />
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </nav>
</template>
