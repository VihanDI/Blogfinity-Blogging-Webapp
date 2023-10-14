import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import BlogRoute from "./routes/blog.route";

const app = express();

//middleware for logging
app.use(morgan("dev"));

//for sending json to the express server
app.use(express.json());

//passing all the blog related routes to the blog route handler
app.use("/api/blogs", BlogRoute);

//middleware for handling invalid routes
app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

//middleware for handling errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occured";

  if (error instanceof Error) {
    errorMessage = error.message;
    res.status(500).json({ error: errorMessage });
  }
});

export default app;
