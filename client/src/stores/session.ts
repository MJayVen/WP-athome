import { reactive } from "vue";
import users, { addUser, addWorkout, deleteWorkout, getAllWorkouts, type User, type Workout } from "./users";

const session = reactive({
    user: null as User | null,
});

// login user
export function login(username: string, password: string) {
    // find user
    const user = users.value.find((user) => user.username === username);
    // see if user exists
    if (user) {
        addWorkout(user.username as string, { id: 1, name: "test", details: "test", date: "test" });
        addWorkout(user.username as string, { id: 2, name: "test", details: "test", date: "test" });
    
        // check password
        if (user.password === password) {
            // set session user
            session.user = user;
            console.log("logged in user " + username);
            console.log(user.workouts)
        }
    } else {
        // throw error
        throw new Error("Invalid username or password");
    }
}

export function register(username: string, password: string) {
    // see if username exists
    if (users.value.find((user) => user.username === username)) {
        // throw error
        throw new Error("Username already exists");
    } else {
        // add user
        console.log("registering user...")
        addUser(username, password);
    }
}

// logout user
export function logout() {
    session.user = null;
    console.log("logged out")
}


export function addSessionWorkout(workout: Workout) {
    // check if user is logged in
    if (session.user) {
        // add workout
        addWorkout(session.user.username as string, workout)
    } else {
        // throw error
        throw new Error("User not logged in");
    }
}

export function getAllSessionWorkouts() {
    // check if user is logged in
    if (session.user) {
        return getAllWorkouts(session.user.username as string);
    } else {
        // throw error
        throw new Error("User not logged in");
    }
}

export default session;