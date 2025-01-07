const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 6500;

// BodyParser is actually a middleware to parse JSON requests
app.use(bodyParser.json());

// Created an in-memory database on name "users"
let users = [
  { id: 1, name: "Suraj" },
  { id: 2, name: "Satyam" },
];

// Home Route
app.get("/", (req, res) => {
  res.send("Good Morning Team Urban Culture!");
});

// API get request for fetching data
app.get("/users", (req, res) => {
  res.json(users);
});

// GET a specific user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Created a new user on '/users' end point
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
  };
  users.push(newUser);

  res.status(201).json(newUser);
});

// Updated a user by ID
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users[userIndex].name = name || users[userIndex].name;
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Deleted an user by ID
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Started the server on port 6500
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});