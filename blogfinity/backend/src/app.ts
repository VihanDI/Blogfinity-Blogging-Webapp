import "dotenv/config";
import express from "express";

import BlogModel from "./models/blog.model";

const app = express();

app.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find().exec();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    let errorMessage = "An unknown error occured";

    if (error instanceof Error) {
      errorMessage = error.message;
      res.status(500).json({ error: errorMessage });
    }
  }
});

export default app;
