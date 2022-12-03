const data = require("../data/users.json");

/**
 *
 * @returns { User[] } all users
 */
const getUsers = () => {
  return data;
};

/**
 *
 * @param {string} username
 * @returns {User} user matching username
 */
const getUser = (username) => {
  return data.find((user) => user.username === username);
};

/**
 *
 * @param {User} user object
 * @returns {User} all users
 */
const createUser = (user) => {
  data.push({
    username: user.username,
    password: user.password,
    workouts: [],
    following: [],
  });
  return getUser(user.username);
};

/**
 *
 * @param {string} username
 * @returns {User[]} all users
 */
const removeUser = (username) => {
  const i = data.indexOf(getUser(username));
  if (i > -1) {
    data.splice(i, 1);
  }
  return data;
};

/**
 *
 * @param {string} username
 * @returns {string[]} list of other users that user is following
 */
const getFollowing = (username) => {
  return data.find((user) => user.username === username).following;
};

/**
 *
 * @param {string} username
 * @param {string} fusername
 * @returns {string[]} list of other users that user is following
 */
const follow = (username, fusername) => {
  const user = getUser(username);
  if (!user.following.includes(fusername)) {
    user.following.push(fusername);
  }
  return user.following;
};

/**
 *
 * @param {string} username
 * @param {string} fusername
 * @returns {string[]} list of uids of users being followed
 */
const unfollow = (username, fusername) => {
  const user = getUser(username);
  user.following = user.following.filter(
    (followee) => followee !== fusername
  );
  return user.following;
};

/**
 *
 * @param {string} username
 * @param {string} password
 * @returns {User} user matching username and password
 */
const login = (username, password) => {
  const user = getUser(username);
  if (user && user.password === password) {
    return getUser(username);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  removeUser,
  getFollowing,
  follow,
  unfollow,
  login,
};
