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
    api(`workouts/${session.user?.username}`).then((data) =>{
        workoutList.splice(0, workoutList.length, ...data as Workout[]);
    });
}
// watch session.user to load workouts
watch(() => session.user, loadWorkouts);

export function addWorkout(name: string, weight: number, reps: number, date: string) {
    
    const workout = {
        wid: newWorkoutId(),
        name,
        weight,
        reps,
        date
    };

    workoutList.push(workout);
    console.log("added workout");


    // api(`workouts/${session.user?.username}`, workout).then((data) => {
    //     workoutList.push(workout);
    //     console.log("Added workout");
    // })
}

export function deleteWorkout(workout: Workout) {
    workoutList.filter((workout) => workout.wid !== workout.wid);
}

function newWorkoutId() {
    if (workoutList.length === 0) {
        return 1;
    }
    return workoutList[workoutList.length - 1].wid + 1;
}

