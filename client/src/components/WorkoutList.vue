<script lang="ts">
import WorkoutRecord from "./WorkoutRecord.vue";
import { useUsersStore, type User } from "../stores/users";
import { useSessionStore } from "../stores/session";

export default {
  components: {
    WorkoutRecord,
  },
  data() {
    const session = useSessionStore();
    const userStore = useUsersStore();
    return {
      userStore: userStore,
      curUser: userStore.getUser(session.user?.username as string),
    };
  },
  methods: {
    deleteWorkout(id: number) {
      // remove workout from workouts array
      this.userStore.deleteWorkout(this.curUser?.username as string, id);
    },
  },
  mounted() {
    console.log(this.curUser?.workouts);
  },
};
</script>

<!-- the box containing the list of previous workouts -->
<template>
  <div
    class="container is-flex is-flex-direction-row is-flex-wrap-wrap-reverse is-justify-content-center"
  >
    <div id="workoutList" class="box">
      <div
        v-if="(curUser!.workouts || []).length > 0"
        class="content is-flex is-flex-direction-column"
      >
        <h3 class="has-text-white">List of previous workouts:</h3>
        <WorkoutRecord
          v-for="workout in curUser!.workouts"
          :workout="workout"
          @delete="deleteWorkout"
        />
      </div>
      <h3 class="title" v-else>Click "Add a workout"</h3>
    </div>
    <div
      id="workoutListOptions"
      class="block is-flex is-flex-direction-column is-flex-align-content-center"
    >
      <!-- Pass new workout id to new workout -->
      <RouterLink
        :to="`/workout/${userStore.newWorkoutId(curUser!.username as string)}`"
        class="button is-success"
      >
        Add a workout +
      </RouterLink>
      <a class="button is-warning">View Analytics (not implemented)</a>
    </div>
  </div>
</template>

<style scoped>
h3 {
  padding: 1rem;
  color: var(--white);
  text-align: center;
}

#workoutList {
  margin-bottom: auto;
  background-color: var(--navy-blue-dark);
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 0;
  min-width: 50%;
  width: 75%;
  max-height: 40vw;
  overflow-y: auto;
  margin-right: 10px;
}
#workoutListOptions {
  margin-bottom: auto;
  max-width: 150px;
  margin-bottom: 10px;
  color: var(--white);
}
.field .input {
  width: 150px !important;
  margin: 0 8px 0 0;
}
a {
  margin: 0 0 8px 0;
}
</style>
