require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.mongodb_connection_string);

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const task = mongoose.model("tasks", taskSchema);

module.exports = {
  task,
};
