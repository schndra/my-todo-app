import Todo from "../models/Todo.js";

export const getTodos = async (req, res, next) => {
  try {
    const todo = await Todo.find({});
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
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

export const deleteTodo = async (req, res, next) => {
  const { id: todoID } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete({ _id: todoID });
    if (!todo) {
      return res.status(404).json({ msg: `No todo with id: ${todoID}` });
    }

    res.status(200).json({ todo });
  } catch (error) {
    next(error);
  }
};
