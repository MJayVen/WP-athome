const express = require('express');
const users = require('../models/users');

const app = express.Router();

app
    .get('/', (req, res) => {
        res.status(200).send(users.getUsers());
    })
    .get('/:id', (req, res) => {
        const user = users.getUser(+req.params.id)
        if(user) {
            res.status(200).send(user);
        } else {
            res.status(404).send('User not found');
        }
    });

module.exports = app;