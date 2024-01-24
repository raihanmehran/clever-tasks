const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

const login = zod.object({
  username: zod.string(),
  password: zod.password()
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
