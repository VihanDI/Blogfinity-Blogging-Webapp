import { RequestHandler } from "express";
import BlogModel from "../models/blog.model";

export const getBlogs: RequestHandler = async (req, res, next) => {
  try {
    //throw Error("Test Error");
    const blogs = await BlogModel.find().exec();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getBlog: RequestHandler = async (req, res, next) => {
  const blogId = req.params.blogId;

  try {
    const blog = await BlogModel.findById(blogId).exec();
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

export const createBlog: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  try {
    const newBlog = await BlogModel.create({
      title: title,
      content: content,
    });

    res.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
};
