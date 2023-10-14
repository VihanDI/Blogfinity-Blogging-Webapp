import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";

import BlogModel from "./models/blog.model";

const app = express();

app.get("/", async (req, res, next) => {
  try {
    //throw Error("Test Error");
    const blogs = await BlogModel.find().exec();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
});

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
