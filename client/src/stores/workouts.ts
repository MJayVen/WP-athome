import { reactive, watch } from "vue";
import session, { api } from "./session";

export interface Workout {
    id: number;
    name: string;
    weight: number;
    reps: number;
    date: string;
}

const workoutList = reactive([] as Workout[]);

export default workoutList;

export function loadWorkouts() {
    api(`workouts/${session.user?.username}`).then((data) =>{
        workoutList.splice(0, workoutList.length, ...data as Workout[]);
    });
}
// watch session.user to load workouts
watch(() => session.user, loadWorkouts);

export function addWorkout(workout: Workout) {
    api(`workouts/${session.user?.username}`, workout).then((data) => {
        workoutList.push(workout);
        console.log("Added workout");
    })
}

export function deleteWorkout(id: number) {
    const i = workoutList.findIndex(workout => workout.id === id);
    if (i > -1) {
        workoutList.splice(i, 1)
    } else {
        console.log("Workout id " + id + " cannot be not found");
    }
}

