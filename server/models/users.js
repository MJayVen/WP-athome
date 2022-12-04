const data = require("../data/users.json");
const { connect } = require("./mongo");
const { ObjectId } = require("mongodb");

const DATABASE_NAME = "fit-tracker";
const COLLECTION_NAME = "users";


const collection = async () => {
  const client = await connect();
  return client.db(DATABASE_NAME).collection(COLLECTION_NAME);
};

/**
 *
 * @returns { User[] } all users
 */
const getUsers = async () => {
  const db = await collection();
  const data = await db.find().toArray();
  return data;
};

/**
 *
 * @param {string} username
 * @returns {User} user matching username
 */
const getUser = async (username) => {
  const db = await collection();
  const data = await db.findOne({ username });
  return data;
};

/**
 *
 * @param {User} user object
 * @returns {User} all users
 */
const createUser = async (user) => {
  const db = await collection();
  await db.insertOne({
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
 */
const removeUser = async (username) => {
  const db = await collection();
  await db.deleteOne({ username });
};

/**
 *
 * @param {string} username
 * @returns {string[]} list of other users that user is following
 */
const getFollowing = async (username) => {
  const user = await getUser(username);
  return user.following;
};

/**
 *
 * @param {string} username
 * @param {string} fusername
 */
const follow = async (username, fusername) => {
  const db = await collection();
  const user = await getUser(username);
  if (!user.following.includes(fusername)) {
    await db.updateOne({ username: username }, { $push: { following: fusername } });
  }
};

/**
 *
 * @param {string} username
 * @param {string} fusername
 */
const unfollow = async (username, fusername) => {
  const db = await collection();
  const user = await getUser(username);
  if (user.following.includes(fusername)) {
    await db.updateOne({ username: username }, { $pull: { following: fusername } });
  }
};

/**
 *
 * @param {string} username
 * @param {string} password
 * @returns {User} user matching username and password
 */
const login = async (username, password) => {
  const user = await getUser(username);
  if (user && user.password === password) {
    console.log("User " + username + " logged in");
    return { username: user.username, password: user.password };
  } else {
    console.log("Invalid username or password");
    return null;
  }
};

const seed = async () => {
  const db = await collection();
  await db.deleteMany();
  await db.insertMany(data);
}

module.exports = {
  collection,
  getUsers,
  getUser,
  createUser,
  removeUser,
  getFollowing,
  follow,
  unfollow,
  login,
  seed
};
