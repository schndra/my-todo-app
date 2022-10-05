export const getTodos = (req, res) => {
  res.send("get todo");
};

export const createTodo = (req, res) => {
  res.json("create todo");
};

export const completedTodo = (req, res) => {
  res.send("completed todo");
};

export const getAllTodos = (req, res) => {
  res.send("get all todos");
};

export const deleteTodo = (req, res) => {
  res.send("delete todo");
};
