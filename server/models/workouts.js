const data = require('../data/users.json');

/**
 * 
 * @param {number} uid 
 * @returns {object[]} all workouts for a user
 */
function getWorkouts(uid) {
    return data.find(user => user.uid === uid).workouts;
}

/**
 * 
 * @param {number} uid 
 * @param {number} wid 
 * @returns {object} single workout from a user
 */
function getWorkout(uid, wid) {
    return data.find(user => user.uid === uid).workouts.find(workout => workout.wid === wid);
}

/**
 * 
 * @param {number} uid 
 * @param {Workout} workout object
 */
function addWorkout(uid, workout) {
    const user = data.find(user => user.uid === uid);
    const i = user.workouts.indexOf(workout);
    if (i > -1) {
        user.workouts[i] = workout;
    } else {
        user.workouts.push(workout);
    }
}

function removeWorkout(uid, wid) {
    const user = data.find(user => user.uid === uid);
    user.workouts = user.workouts.filter(workout => workout.wid !== wid);
}

module.exports = {
    getWorkouts,
    getWorkout,
    addWorkout,
    removeWorkout
}