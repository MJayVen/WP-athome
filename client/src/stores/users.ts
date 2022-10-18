import { ref, watch } from 'vue'
import session from './session'

let users = ref([] as User[])

export class User {
    public username?: string;
    public password?: string;
    public workouts?: Workout[];
    public following?: User[];
}

export class Workout {
    public id?: number;
    public name?: string;
    public details?: string;
    public date?: string;
}

export function addUser(username: string, password: string) {
    users.value.push(
        {
            username,
            password,
        }
    )
    console.log("added user" + username)
}

export function newWorkoutId(username: string) {
    const user = users.value.find((user) => user.username === username)
    if (user) {
        // return new id
        return (user.workouts?.length || 0)+1
    }
}

export function addWorkout(username: string, workout: Workout) {
    const user = users.value.find((user) => user.username === username)
    if (user) {
        console.log("adding workout...")
        user.workouts?.push(workout);
    }
}

export function deleteWorkout(username: string, id: number) {
    const user = users.value.find((user) => user.username === username);
    if (user) {
        // find workout
        const workout = user.workouts?.find((workout) => workout.id === id);
        // workout exists?
        if (workout) {
            // delete workout
            user.workouts?.splice(user.workouts.indexOf(workout), 1);
            console.log("deleted workout " + id)
        }
    }
}

export function getAllWorkouts(username: string) {
    const user = users.value.find((user) => user.username === username);
    if(user){
        return user.workouts;
    }
}

export default users;



// entering values for testing

addUser("a", "a")
