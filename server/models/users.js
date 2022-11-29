const data = require('../data/users.json');

function getUsers() {
    return data;
}

function getUser(id) {
    return data.find(user => user.id === id);
}

module.exports = {
    getUsers,
    getUser
};