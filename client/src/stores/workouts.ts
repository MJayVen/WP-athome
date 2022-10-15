import { defineStore } from 'pinia'
// a default list of workouts, used for testing
export const useWorkoutsStore = defineStore('workout', () => {
  const workouts = [
    {
      id: 1,
      date: "10/12/2022",
      exercises: [
        {
          name: "Bench Press",
          sets: [
            {
              id: 1,
              weight: 100,
              reps: 10,
            },
            {
              id: 2,
              weight: 110,
              reps: 10,
            },
            {
              id: 3,
              weight: 120,
              reps: 10,
            },
          ],
        },
        {
          name: "Dead Lift",
          sets: [
            {
              id: 1,
              weight: 130,
              reps: 10,
            },
            {
              id: 2,
              weight: 140,
              reps: 10,
            },
            {
              id: 3,
              weight: 150,
              reps: 10,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      date: "10/14/2022",
      exercises: [
        {
          name: "Bench Press",
          sets: [
            {
              id: 1,
              weight: 100,
              reps: 10,
            },
            {
              id: 2,
              weight: 110,
              reps: 10,
            },
            {
              id: 3,
              weight: 120,
              reps: 10,
            },
          ],
        },
        {
          name: "Dead Lift",
          sets: [
            {
              id: 1,
              weight: 130,
              reps: 10,
            },
            {
              id: 2,
              weight: 140,
              reps: 10,
            },
            {
              id: 3,
              weight: 150,
              reps: 10,
            },
          ],
        },
      ],
    },
  ]

  return { workouts }
})