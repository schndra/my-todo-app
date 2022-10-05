import Todo from "../models/Todo.js";

export const getTodos = (req, res) => {
  res.send("get todo");
};

export const createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
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
