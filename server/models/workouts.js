const data = require('../data/users.json');

function getWorkouts(uid) {
    return data.find(user => user.id === uid).workouts;
}

function getWorkout(uid, wid) {
    return data.find(user => user.id === uid).workouts.find(workout => workout.id === wid);
}

module.exports = {
    getWorkouts,
    getWorkout
}