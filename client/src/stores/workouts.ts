import { reactive, watch } from "vue";
import session, { api } from "./session";

export interface Workout {
  wid: number;
  name: string;
  weight: number;
  reps: number;
  date: string;
}

const workoutList = reactive([] as Workout[]);

export default workoutList;

export function loadWorkouts() {
  api(`workouts/${session.user?.username}`).then((data) => {
    console.log("loading in workouts");
    workoutList.splice(0, workoutList.length, ...(data as Workout[]));
  });
}
// watch session.user to load workouts
watch(() => session.user, loadWorkouts);

export async function addWorkout(
  wid: number,
  name: string,
  weight: number,
  reps: number,
  date: string
) {
  const workout = {
    wid,
    name,
    weight,
    reps,
    date,
  };
  await api(`workouts/${session.user?.username}`, workout).then((data) => {
    workoutList.push(workout);
    console.log("Added workout");
  });
}

export function getWorkout(wid: number) {
  return workoutList.find((workout) => workout.wid === wid);
}

export function getWorkoutsById(wid: number) {
  /* USE API */
  return workoutList.filter((workout) => workout.wid === wid);
  // THIS IS A PLACEHOLDER, USE API
}

export function deleteWorkout(workout: Workout) {
  workoutList.filter((workout) => workout.wid !== workout.wid);
}

export function newWorkoutId() {
  if (workoutList.length === 0) {
    return 1;
  }
  return workoutList[workoutList.length - 1].wid + 1;
}
