import { RequestHandler } from "express";
import BlogModel from "../models/blog.model";
import createHttpError from "http-errors";
import mongoose from "mongoose";

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
    //checking fot the validity of the blogId
    if (!mongoose.isValidObjectId(blogId)) {
      throw createHttpError(400, "Invalid blog Id");
    }

    const blog = await BlogModel.findById(blogId).exec();

    //handling errors of the object not found in the database
    if (!blog) {
      throw createHttpError(404, "Blog not found");
    }

    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

interface CreateBlogBody {
  title?: string; // marked as optional since the value can be undefine before handling the errors
  content?: string; // if this is optional use content? instead of content
}

export const createBlog: RequestHandler<
  unknown,
  unknown,
  CreateBlogBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  try {
    if (!title) {
      throw createHttpError(400, "Blog must have a title");
    }

    const newBlog = await BlogModel.create({
      title: title,
      content: content,
    });

    res.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
};
