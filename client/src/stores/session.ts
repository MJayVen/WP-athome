import { defineStore } from 'pinia'; 
import { useStorage } from "@vueuse/core";
import { User, useUsersStore } from "../stores/users";

export const useSessionStore = defineStore({
    id: 'session',
    state: () => ({
        user: useStorage('user', {} as User | null),
    }),
    getters: {
        getUser(): User | null {
            return this.user;
        },
        isLoggedIn(): boolean {
            return this.user !== null;
        }
    },
    actions: {
        login(username: string, password: string) {
            const users = useUsersStore();
            // find user
            const user = users.getAllUsers.find((user) => user.username === username);
            // see if user exists
            if (user) {
                // check password
                if (user.password === password) {
                    // set session user
                    this.user = user;
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
            this.user = null;
            console.log("logged out");
        }
    }
});