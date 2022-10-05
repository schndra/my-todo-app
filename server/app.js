import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

import todoRouter from "./routes/todo.js";

app.use(express.json());

// api routes
app.use("/api/v1/todos", todoRouter);

app.get("/:id", (req, res) => {
  res.send(`aasdfasf`);
});

// testing route
// app.get("/", (req, res) => {
//   res.send("its working bish");
// });

const port = process.env.PORT;
app.listen(port, () => {
  return console.log(`listening on port ${port}...`);
});
