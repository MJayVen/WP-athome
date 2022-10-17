import { reactive } from "vue";
import users, { addUser, type User } from "./users";

const session = reactive({
    user: null as User | null,
});

// login user
export function login(username: string, password: string) {
    // see if user exists
    if (users.value.find((user) => user.username === username && user.password === password)) {
        // set session user
        session.user = {
            username,
            password
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
        addUser(username, password);
    }
}

// logout user
export function logout() {
    session.user = null;
}


export default session;