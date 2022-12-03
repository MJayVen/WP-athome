const express = require("express");

const workouts = require("../models/workouts");

const app = express.Router();

app
  .get("/:username", (req, res, next) => {
    const userWorkouts = workouts.getWorkouts(req.params.username);
    res.status(200).json(userWorkouts);
  })
  .get("/:username/:wid", (req, res, next) => {
    const workout = workouts.getWorkout(req.params.username, +req.params.wid);
    if (workout) {
      res.json(workout);
    } else {
      res.status(404).send("Workout not found");
    }
  })
  .post("/:username", (req, res, next) => {
    const newWorkout = workouts.createWorkout(req.params.username, req.body);
    res.status(201).json(newWorkout);
  })
  .delete("/:username/:wid", (req, res, next) => {
    const removingWorkout = workouts.removeWorkout(
      req.params.username,
      +req.params.wid
    );
    res.status(200).json(removingWorkout);
  });

module.exports = app;
