const express = require("express");

const workouts = require("../models/workouts");

const app = express.Router();

app
  .get("/:username", (req, res, next) => {
    const userWorkouts = workouts.getWorkouts(req.params.username);
    res.status(200).send(userWorkouts);
  })
  .get("/:username/:wid", (req, res, next) => {
    const workout = workouts.getWorkout(req.params.username, +req.params.wid);
    if (workout) {
      res.send(workout);
    } else {
      res.status(404).send("Workout not found");
    }
  })
  .post("/:username", (req, res, next) => {
    const newWorkout = workouts.addWorkout(req.params.username, req.body);
    res.status(201).send(newWorkout);
  })
  .delete("/:username/:wid", (req, res, next) => {
    const removingWorkout = workouts.removeWorkout(
      req.params.username,
      +req.params.wid
    );
    res.status(200).send(removingWorkout);
  });

module.exports = app;
