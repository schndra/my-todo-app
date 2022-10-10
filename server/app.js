import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
import connectDB from "./config/connect.js";
import todoRouter from "./routes/todo.js";

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-hander.js";

// cors
import cors from "cors";

app.use(cors());
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

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
