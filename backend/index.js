const express = require("express");
const { createTodo } = require("./types");
// const types = require("./types"); // we can also write it like this but the upper syntax is more clear
const app = express();

app.use(express.json());

app.post("/login", function(req, res){
  const credentials = req.body
  
})

app.post("/todo", function (req, res) {
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
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updatePayload.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid inputs",
    });
    return;
  }

  // update the task in the mongodb
});
