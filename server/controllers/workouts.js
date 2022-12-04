const express = require("express");

const workouts = require("../models/workouts");

const app = express.Router();

app
  .get("/:username", (req, res, next) => {
    workouts.getWorkouts(req.params.username)
      .then((data) => {
        res.status(200).send(data);
      })
  })
  .get("/:username/:wid", (req, res, next) => {
    workouts.getWorkout(req.params.username, +req.params.wid)
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(404).send("Workout not found");
        }
      })
  })
  .post("/:username", (req, res, next) => {
    workouts.addWorkout(req.params.username, req.body)
      .then((data) => {
        res.status(201).send("Workout added");
      })
      .catch(next);
  })
  .delete("/:username/:wid", (req, res, next) => {
    workouts.removeWorkout(req.params.username, +req.params.wid)
      .then((data) => {
        res.status(200).send("Workout deleted");
      })
  });

module.exports = app;
