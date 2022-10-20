import { defineStore } from 'pinia'; 
import { useStorage } from '@vueuse/core';

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
        deleteUser(username: string) {
            const user = this.users.find((user) => user.username === username);
            if(user){
                this.users.splice(this.users.indexOf(user), 1);
            } else {
                console.log('user ' + username + ' not found - deleteUser')
            }
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
                // if workout already exists, delete existing and replace with new
                if(user.workouts?.find((w) => w.id === workout.id)) {
                    console.log("replacing workout with id " + workout.id);
                    this.deleteWorkout(username as string, workout.id as number)
                }
                // add new workout
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
                    console.log("deleted workout " + id + " - deleteWorkout")
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
        getWorkout(username: string, id: number): Workout | undefined {
            const user = this.users.find((user) => user.username === username);
            if (user) {
                return user.workouts?.find((workout) => workout.id === id);
            }
            console.log('user ' + username + ' not found - getWorkout')
        },
        addFollow(follower: string, followee: string) {
            const user = this.users.find((user) => user.username === follower);
            if(user) {
                // as long as user not already in follow list
                if(!user.following?.includes(followee)){
                    user.following?.push(followee);
                    console.log("followed " + followee);
                } else {
                    console.log("already following " + followee)
                }                
            } else {
                console.log("user " + follower + " not found - addFollow")
            }
        },
        deleteFollow(follower: string, followee: string) {
            const user = this.users.find((user) => user.username === follower);
            if(user) {
                const follow = user.following?.find((follow) => follow === followee);
                if (follow) {
                    user.following?.splice(user.following.indexOf(follow), 1);
                    console.log("unfollowed " + followee);
                }
            } else {
                console.log("user " + follower + " not found - deleteFollow")
            }
        },
        getAllFollowers(username: string) {
            return this.users.find((user) => user.username === username)?.following
        },
        isFollowing(follower: string, followee: string) {
            const user = this.users.find((user) => user.username === follower);
            if(user) {
                return user.following?.includes(followee)
            }
            console.log("user " + follower + " not found - isFollowing")
            return false
        }
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
    public weight?: number;
    public reps?: number;
    public date?: string;
}
