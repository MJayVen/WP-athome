<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSessionStore } from "../stores/session";

const session = useSessionStore();
const username = ref("");
const password = ref("");
const router = useRouter();

function submit() {
  session.login(username.value, password.value);
  router.push("/");
}
</script>

<template>
  <div class="container">
    <div class="box">
      <h1 class="title">Login</h1>
      <form @submit.prevent="submit()">
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Username"
              v-model="username"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Password"
              v-model="password"
            />
          </div>
        </div>
        <input type="submit" value="Login" class="button is-success" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-width: 350px;
  width: 40%;
}
.box {
  background-color: var(--navy-blue-light);
  border-radius: 5px;
  padding: 1rem;
}
h1 {
  text-align: center;
}
</style>
