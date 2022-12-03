const data = require("../data/users.json");

/**
 *
 * @param {string} userame
 * @returns {object[]} all workouts for a user
 */
function getWorkouts(username) {
  return data.find((user) => user.username === username).workouts;
}

/**
 *
 * @param {string} username
 * @param {number} wid
 * @returns {object} single workout from a user
 */
function getWorkout(username, wid) {
  return data
    .find((user) => user.username === username)
    .workouts.find((workout) => workout.wid === wid);
}

/**
 *
 * @param {string} username
 * @param {Workout} workout object
 */
function addWorkout(username, newWorkout) {
  const user = data.find((user) => user.username === username);
  // get index of workout sharing the same wid
  const i = user.workouts.findIndex(
    (workout) => workout.wid === newWorkout.wid
  );
  if (i >= 0) {
    user.workouts[i] = newWorkout;
  } else {
    user.workouts.push(newWorkout);
  }
  return user.workouts;
}

/**
 *
 * @param {string} username
 * @param {number} wid
 */
function removeWorkout(username, wid) {
  const user = data.find((user) => user.username === username);
  user.workouts = user.workouts.filter((workout) => workout.wid !== wid);
  return user.workouts;
}

module.exports = {
  getWorkouts,
  getWorkout,
  addWorkout,
  removeWorkout,
};
