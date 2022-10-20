import { defineStore } from 'pinia'; 
import { useStorage } from "@vueuse/core";
import { useUsersStore, type User } from "../stores/users";

export const useSessionStore = defineStore({
    id: 'session',
    state: () => ({
        // useStorage is reactive object stored localStorage
        username: useStorage('username', ''),
        password: useStorage('password', ''),
        loggedIn: useStorage('loggedIn', false),
    }),
    getters: {
        // returns user object if logged in
        getUser(): User | undefined {
            if(this.loggedIn) {
                return useUsersStore().getUser(this.username)
            } else {
                console.log('no user logged in - getSessionUser')
            }
        }
    },
    actions: {
        login(username: string, password: string) {
            // find user
            const user = useUsersStore().getAllUsers.find((user) => user.username === username);
            // see if user exists
            if (user) {
                // check password
                if (user.password === password) {
                    // set session user
                    this.username = username;
                    this.password = password;
                    this.loggedIn = true;
                    console.log("logged in user " + username);
                } else {
                    console.log("wrong password");
                }
            } else {
                // throw error
                throw new Error("username does not exist");
            }
        },
        logout() {
            this.username = '';
            this.password = '';
            this.loggedIn = false;
            console.log("logged out");
        }
    }
});