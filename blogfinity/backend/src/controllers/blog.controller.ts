import { RequestHandler } from "express";
import BlogModel from "../models/blog.model";

export const getBlog: RequestHandler = async (req, res, next) => {
  try {
    //throw Error("Test Error");
    const blogs = await BlogModel.find().exec();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};
