import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { ref } from 'vue';
import type { Workout } from './workouts';

const users = ref([] as User[]);

export function getUsers() {
    return users;
}
export function getUser(id: number) {
    return users.value.find((user) => user.id === id);
}
export function addUser(username: string, password: string) {
    if (username === '' || password === '') {
        throw new Error('username or password cannot be empty')
    }
    // check if user already exists
    if (users.value.find(user => user.username === username)) {
        const id = users.value.length + 1;
        users.value.push(
            {
                id,
                username,
                password,
            }
        );
        console.log("added user" + username);
    } else {
        console.log("user already exists");
    }
}
export function deleteUser(id: number) {
    const user = getUser(id);
    if (user) {
        users.value.splice(users.value.indexOf(user), 1);
    } else {
        console.log('user with id ' + id + ' not found - deleteUser')
    }
}


export interface User {
    id: number;
    username: string;
    password: string;
}

