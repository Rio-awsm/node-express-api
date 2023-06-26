import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("post route reached");
  const user = req.body;

  const userwithId = { ...user, id: uuidv4() };

  users.push(userwithId);

  res.send(`user with the name ${user.firstName} added to the database`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with the id: ${id} deleted`);
});

export default router;

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  const user = users.find((user) => user.id == id);

  res.send(`User with the id: ${id} has been updated`)
});
