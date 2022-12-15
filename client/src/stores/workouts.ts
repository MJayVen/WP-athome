import { reactive, watch } from "vue";
import session, { api, setError } from "./session";

export interface Workout {
  wid: number;
  name: string;
  weight: number;
  reps: number;
  date: string;
}

export const workoutNames = [
  "Squats",
  "Bench Press",
  "Deadlift",
  "Overhead Press",
  "Barbell Row",
];

const workoutList = reactive([] as Workout[]);

export default workoutList;

export function loadWorkouts() {
  if (session.user) {
    api(`workouts/${session.user?.username}`).then((data) => {
      console.log("loading in workouts");
      workoutList.splice(0, workoutList.length, ...(data as Workout[]));
    });
  } else {
    workoutList.splice(0, workoutList.length);
  }
}
watch(() => session.user, loadWorkouts);

export async function getUserWorkouts(username: string): Promise<Workout[]> {
  return (await api(`workouts/${username}`)) as Workout[];
}

export async function addWorkout(workout: Workout) {
  await api(`workouts/${session.user?.username}`, workout);
  const i = workoutList.findIndex((w) => w.wid === workout.wid);
  if (i >= 0) {
    workoutList.splice(i, 1, workout);
    session.messages.push({ type: "success", text: "Added workout." });
  } else {
    workoutList.push(workout);
    session.messages.push({ type: "success", text: "Updated workout." });
  }
}

export async function deleteWorkout(wid: number) {
  await api(`workouts/${session.user?.username}/${wid}`, null, "DELETE");
  const i = workoutList.findIndex((w) => w.wid === wid);
  workoutList.splice(i, 1);
  session.messages.push({ type: "success", text: "Workout deleted." });
}

export function newWorkoutId() {
  if (workoutList.length === 0) {
    return 1;
  }
  return workoutList[workoutList.length - 1].wid + 1;
}
