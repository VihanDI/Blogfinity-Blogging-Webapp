import express from "express";
import * as BlogController from "../controllers/blog.controller";

const router = express.Router();

router.get("/", BlogController.getBlog);
router.post("/", BlogController.createBlog);

export default router;
