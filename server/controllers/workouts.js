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
    });

module.exports = app;