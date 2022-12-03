<script setup lang="ts">
import type { User } from "../stores/users";
import type { PropType } from "vue";
import { getUserWorkouts } from "@/stores/workouts";
import session from "@/stores/session";
import followList, { follow, unfollow } from "@/stores/followers";
import { deleteUser } from "../stores/users";

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
});

const allWorkouts = await getUserWorkouts(props.user.username);
// ALL WORKOUTS DOESNT LOAD IN TIME, FIX THIS
</script>

<template>
  <div class="block" v-if="allWorkouts.length">
    <h1 class="title username">{{ user.username }}</h1>
    <h1 class="title">{{ allWorkouts.length }} total workouts</h1>
    <div class="buttons is-flex is-justify-content-center is-flex-wrap-nowrap">
      <div v-if="user?.username == session.user?.username">
        <!-- Already logged in as user -->
        <button class="button is-success">You!</button>
      </div>
      <div v-else>
        <button class="button is-danger" @click="deleteUser(user.username)">
          Delete User
        </button>
        <!-- Not-following -->
        <button
          v-if="followList.includes(user.username)"
          class="button is-warning"
          @click="unfollow(user.username)"
        >
          Follow
        </button>
        <!-- Following -->
        <button v-else class="button" @click="follow(user.username)">
          Following
        </button>
      </div>
    </div>
  </div>
  <div v-else>loading...</div>
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
}

.button {
  width: 100px;
}

.username {
  font-style: italic;
  background-color: var(--navy-blue-light) !important;
  padding: 5px;
  border-radius: 5px;
  min-width: 5em;
  width: fit-content;
}
</style>
