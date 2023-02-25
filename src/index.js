const express = require("express");
const app = express();
const users = require("../users.json");
module.exports = app;

// GET /users endpoint
app.get("/users", (req, res) => {
  res.send(users.filter((user) => user.id === req.query.id));
});
