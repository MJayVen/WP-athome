const express = require('express');

const users = require('../models/users');

const app = express.Router();

app
    .post('/', (req, res, next) => {
        res.send(users.createUser(req.body));
    })
    .get('/', (req, res, next) => {
        res.send(users.getUsers());
    })
    .get('/:uid', (req, res, next) => {
        res.send(users.getUser(+req.params.uid));
    })
    .get('/:uid/followers', (req, res, next) => {
        res.send(users.getFollowers(+req.params.uid));
    })
    .patch('/follow/:uid/:fid', (req, res, next) => {
        res.send(users.follow(+req.params.uid, +req.params.fid));
    })
    .patch('/unfollow/:uid/:fid', (req, res, next) => {
        res.send(users.unfollow(+req.params.uid, +req.params.fid));
    });

module.exports = app;