const express = require('express');

const workouts = require('../models/workouts');

const app = express.Router();

app
    .get('/:uid', (req, res, next) => {
        res.send(workouts.getWorkouts(+req.params.uid));
    })
    .get('/:uid/:wid', (req, res, next) => {
        const workout = workouts.getWorkout(+req.params.uid, +req.params.wid);
        if (workout) {
            res.send(workout);
        } else {
            res.sendStatus(404);
        }
    })
    .post('/:uid', (req, res, next) => {
        res.send(workouts.addWorkout(+req.params.uid, req.body));
    })
    .delete('/:uid/:wid', (req, res, next) => {
        res.send(workouts.removeWorkout(+req.params.uid, +req.params.wid));
    });

module.exports = app;