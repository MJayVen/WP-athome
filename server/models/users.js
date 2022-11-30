const users = require('../data/users.json');

/**
 * 
 * @returns {User[]} all users
 */
const getUsers = () => {
    return users;
};

/**
 * 
 * @param {number} uid  
 * @returns {User} user matching username
 */
const getUser = (uid) => {
    return users.find(user => user.uid === uid);
};

/**
 * 
 * @param {User} user object
 */
const createUser = (user) => {
    users.push(user);
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
    return follower;
}

const unfollow = (uid, fid) => {
    const follower = getUser(uid);
    follower.following = follower.following.filter(uid => uid !== fid);
    return follower;
    
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    follow,
    unfollow
};