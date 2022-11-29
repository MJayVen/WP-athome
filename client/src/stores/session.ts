import { defineStore } from 'pinia'; 
import { useStorage } from "@vueuse/core";
import {users, type User } from "./users";
import { reactive } from 'vue';
import myFetch from '@/services/myFetch';

const session = reactive({
    user: null as User | null,
    loading: 0,
    error: null as string | null,
    messages: [] as Message[]
})

export default session;

export function login(username: string, password: string){
    session.user = {
        
    }
}

export async function api<T>(url: string, data: any = null, method?: string) {
    session.loading++;
    // setError(null);
    try {
        return await myFetch(url, data, method);
    } catch (error) {
        // setError(error as string);
        console.log(error);
    } finally {
        session.loading--;
    }

    return {} as T;
}

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
                return users().getUser(this.username)
            } else {
                console.log('no user logged in - getSessionUser')
            }
        }
    },
    actions: {
        login(username: string, password: string) {
            // find user
            const user = users().getAllUsers.find((user) => user.username === username);
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

export interface Message {
    text: string;
    type: 'danger' | 'warning' | 'success' | 'info';
}
