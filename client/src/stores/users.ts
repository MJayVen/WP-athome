import { defineStore } from 'pinia'; 
import { useStorage } from '@vueuse/core';
// import session from './session'

export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        users: useStorage('users', [] as User[]),
    }),
    getters: {
        getAllUsers(): User[] {
            return this.users
        },
    },
    actions: {
        addUser(username: string, password: string) {
            const workouts = [] as Workout[];
            const following = [] as string[];

            this.users.push(
                {
                    username,
                    password,
                    workouts,
                    following,
                } 
            )
            console.log("added user" + username)
        },
        getUser(username: string): User | undefined {
            return this.users.find((user) => user.username === username);
        },
        newWorkoutId(username: string) {
            const user = this.users.find((user) => user.username === username)
            if (user) {
                // return new id
                return (user.workouts?.length || 0)+1
            }
            console.log('user ' + username + ' not found - newWorkoutId')
        },
        addWorkout(username: string, workout: Workout) {
            const user = this.users.find((user) => user.username === username)
            if (user) {
                user.workouts?.push(workout);
                console.log("added workout " + workout.id + " to user " + username)
            } else {
                console.log('user ' + username + ' not found - addWorkout')

            }
        },
        deleteWorkout(username: string, id: number) {
            const user = this.users.find((user) => user.username === username);
            if (user) {
                // find workout
                const workout = user.workouts?.find((workout) => workout.id === id);
                // workout exists?
                if (workout) {
                    // delete workout
                    user.workouts?.splice(user.workouts.indexOf(workout), 1);
                    console.log("deleted workout " + id)
                }
            } else {
                console.log('user ' + username + ' not found - deleteWorkout')
            }
        },
        getAllWorkouts(username: string): Workout[] {
            const user = this.users.find((user) => user.username === username);
            if (user) {
                return user.workouts || []
            }
            console.log('user ' + username + ' not found - getAllWorkouts')
            return []
        },
        addFollow(follower: string, followee: string) {
            const user = this.users.find((user) => user.username === follower);
            if(user) {
                user.following?.push(followee);
            } else {
                console.log("user " + follower + " not found")
            }
        },
        getAllFollowers(username: string) {
            return this.users.find((user) => user.username === username)?.following
        },
    }
    
});


export class User {
    public username?: string;
    public password?: string;
    public workouts?: Workout[];
    public following?: string[];
    public loggedIn?: boolean;
}

export class Workout {
    public id?: number;
    public name?: string;
    public details?: string;
    public date?: string;
}
