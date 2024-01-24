const express = require("express");
const { createTodo } = require("./types");
const { task } = require("./db");
// const types = require("./types"); // we can also write it like this but the upper syntax is more clear
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    msg: "Hello there!",
  });
});

app.post("/login", function (req, res) {
  // write logic for login
});

app.post("/signup", function (req, res) {
  // write logic for signup
});

app.post("/task", async function (req, res) {
  const createPayload = req.body;
  // types.createTodo.safeParse(createPayload);
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid input",
    });
    return;
  }

  // saving in mongodb
  await task.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Task Created!",
  });
});

app.get("/tasks", async function (req, res) {
  const tasks = await task.find({});
  // const tasks = await task.find({
  //   title: "something"
  // });
  res.json(tasks);
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updatePayload.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid inputs",
    });
    return;
  }

  // update the task in the mongodb

  await task.update(
    {
      _id: req.body._id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Tasks marked as completed!",
  });
});

app.listen(3000);
