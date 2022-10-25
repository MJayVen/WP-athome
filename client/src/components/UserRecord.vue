<script setup lang="ts">
import { useSessionStore } from "../stores/session";
import { User, useUsersStore } from "../stores/users";
import { ref, defineComponent } from "vue";

const usersStore = useUsersStore();
const curUser = useSessionStore();

const props = defineProps({
  user: User,
});

// check is logged in user is following listed user
const isFollowing = ref(
  usersStore.isFollowing(
    curUser.username as string,
    props.user?.username as string
  )
);

function followToggle() {
  // only change if logged in
  if (curUser.loggedIn) {
    isFollowing.value = !isFollowing.value;
  }
  console.log(isFollowing.value);
  if (isFollowing.value) {
    // add follow
    if (curUser.username != props.user?.username) {
      // add user to logged-in user's following list
      usersStore.addFollow(
        curUser.username as string,
        props.user?.username as string
      );
    } else {
      console.log("cant follow yourself, dingus :P");
    }
  } else {
    // remove follow
    usersStore.deleteFollow(
      curUser.username as string,
      props.user?.username as string
    );
  }
}
function deleteUser() {
  if (curUser.username != props.user?.username) {
    usersStore.deleteUser(props.user?.username as string);
  } else {
    console.log("cant delete yourself, ya silly goof XD");
  }
}
</script>

<template>
  <div class="block">
    <h1 class="title username">@{{ user?.username }}</h1>
    <h1 class="title">{{ (user?.workouts || []).length }} total workouts</h1>
    <div
      class="buttons is-flex is-justify-content-center is-flex-wrap-nowrap"
    >
      <div v-if="user?.username == curUser.username">
        <!-- Already logged in as user -->
        <button class="button is-success">You!</button>
      </div>
      <div v-else>
        <button class="button is-danger" @click="deleteUser">
          Delete User
        </button>
        <!-- Not-following -->
        <button
          v-if="!isFollowing"
          class="button is-warning"
          @click="followToggle()"
        >
          Follow
        </button>
        <!-- Following -->
        <button v-else class="button" @click="followToggle()">Following</button>
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
