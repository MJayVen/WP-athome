const data = require('../data/users.json');

/**
 * 
 * @returns {User[]} all users
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
    return data.find(user => user.uid === uid);
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
 * @param {number} fid 
 */
const follow = (uid, fid) => {
    const follower = getUser(uid);
    if (!follower.following.includes(fid)) {
        follower.following.push(fid);
    }
}

const unfollow = (uid, fid) => {
    const follower = getUser(uid);
    follower.following = follower.following.filter(uid => uid !== fid);   
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    follow,
    unfollow
};