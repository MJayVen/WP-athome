import { defineStore } from 'pinia'; 
import { useStorage } from "@vueuse/core";
import { useUsersStore } from "../stores/users";

export const useSessionStore = defineStore({
    id: 'session',
    state: () => ({
        user: useStorage('user', {username: '', password: ''}),
    }),
    getters: {
        getUsername(): string | null {
            return this.user.username;
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
                    this.user.username = username;
                    this.user.password = password;
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
            this.user.username = '';
            this.user.password = '';
            console.log("logged out");
        }
    }
});