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

module.exports = {
    getWorkouts,
    getWorkout
}