<script setup lang="ts">
import session, { isLoading } from "@/stores/session";

const deleteMessage = (i: number) => {
  session.messages.splice(i, 1);
};

const deleteAllMessages = () => {
  session.messages = [];
};
</script>

<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      <span class="mr-1">Messages</span>
      <span v-if="isLoading" class="icon is-small">
        <i class="fas fa-spinner fa-spin"></i>
      </span>
      <span v-else> ({{ session.messages.length }})</span>
    </a>
    <div v-if="session.messages.length" class="navbar-dropdown">
      <button class="clear" @click="deleteAllMessages">Clear Messages</button>
      <div
        v-for="(message, i) in session.messages"
        :key="i"
        class="notification"
        :class="`is-${message.type}`"
      >
        <button class="delete" @click="deleteMessage(i)"></button>
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-dropdown {
  overflow-y: scroll;
  max-height: 300px;
  background-color: var(--navy-blue);
  border: 1px solid var(--white);
  font-weight: bold;
}

.notification {
  margin: 0.2rem;
  padding: 0.5rem;
  padding-right: 2rem;
  color: black !important;
}

.clear {
  background-color: var(--navy-blue-light);
  font-weight: bold;
  font-size: small;
  border-radius: 1rem;
  color: var(--white);
  padding: 0.5rem;
  margin: 0 auto;
  transition: 0.2s;
}
.clear:hover {
  background-color: var(--navy-blue-lighter);
}
</style>
