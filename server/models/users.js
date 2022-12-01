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
 * @param {number} uid
 * @returns {User} user matching username
 */
const getUser = (uid) => {
  return data.find((user) => user.uid === uid);
};

/**
 *
 * @param {string} username
 * @param {string} password
 * @returns {number} uid
 */
const getUserId = (username) => {
  return { uid: data.find((user) => user.username === username).uid };
};

/**
 *
 * @param {User} user object
 */
const createUser = (user) => {
  data.push(user);
};

/**
 *
 * @param {number} uid
 * @returns {number[]} list of uids of users being followed
 */
const getFollowing = (uid) => {
  return data.find((user) => user.uid === uid).following;
};

/**
 *
 * @param {number} uid
 * @param {number} fid
 */
const follow = (uid, fid) => {
  const follower = getUser(uid);
  if (!follower.following.includes(fid)) {
    follower.following.push(fid);
  }
};

const unfollow = (uid, fid) => {
  const follower = getUser(uid);
  follower.following = follower.following.filter((uid) => uid !== fid);
};

module.exports = {
  getUsers,
  getUser,
  getUserId,
  createUser,
  getFollowing,
  follow,
  unfollow,
};
