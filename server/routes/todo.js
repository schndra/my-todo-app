import expres from "express";
const router = expres.Router();
import {
  getTodos,
  getAllTodos,
  completedTodo,
  deleteTodo,
  createTodo,
} from "../controllers/todo.js";

router.route("/").get(getTodos).post(createTodo);
router.route("/completed").get(completedTodo);
router.route("/all").get(getAllTodos);
router.route("/:id").delete(deleteTodo);

export default router;
