const express = require("express");

const users = require("../models/users");

const app = express.Router();

app
  .post("/", (req, res, next) => {
    const newUser = users.createUser(req.body);
    res.status(201).send(newUser);
  })
  .get("/", (req, res, next) => {
    const allUsers = users.getUsers();
    res.status(200).send(allUsers);
  })
  .get("/:username", (req, res, next) => {
    const user = users.getUser(req.params.username);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found");
    }
  })
  .get("/following/:username", (req, res, next) => {
    const following = users.getFollowing(req.params.username);
    res.status(200).send(following);
  })
  .patch("/follow/:username/:fusername", (req, res, next) => {
    const newFollower = users.follow(req.params.username, req.params.fusername);
    res.status(200).send(newFollower);
  })
  .patch("/unfollow/:username/:fusername", (req, res, next) => {
    const removingFollower = users.unfollow(
      req.params.username,
      req.params.fusername
    );
    res.status(200).send(removingFollower);
  })
  .delete("/:username", (req, res, next) => {
    const removingUser = users.removeUser(req.params.username);
    res.status(200).send(removingUser);
  })
  .post("/login", (req, res, next) => {
    const user = users.login(req.body.username, req.body.password);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found");
    }
  });

module.exports = app;
