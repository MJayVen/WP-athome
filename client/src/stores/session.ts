import { reactive } from "vue";

const session = reactive({
    user: null as User | null,
    workouts: [] as Workout[]
});

export function login(firstName: string, lastName: string) {
    session.user = {
        firstName,
        lastName
    }
}

export function logout() {
    session.user = null;
}

export class User {
    public firstName?: string;
    public lastName?: string;
}

export function addWorkout(workoutDate: string) {
    session.workouts.push(
        {
            id: getNewId(),
            date: workoutDate,
            exercises: [
                {
                    id: 1,
                    name: "Squat",
                    sets: [
                        {
                            id: 1,
                            reps: 5,
                            weight: 135,
                        },
                    ],
                },
            ],
        }
    );
    console.log(session.workouts);
}

export function getWorkouts() {
    return session.workouts;
}

export function getNewId() {
    return session.workouts.length + 1;
}

export function deleteWorkout(workout: Workout) {
    session.workouts = session.workouts.filter(w => w !== workout);
    console.log(session.workouts);
}

interface Workout {
    id: number;
    date: string;
    exercises: [
        {
            id: number;
            name: string;
            sets: [
                {
                    id: number;
                    reps: number;
                    weight: number;
                }
            ];
        }
    ];
}

export default session;