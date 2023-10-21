import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import styles from "../styles/ReadPage.module.css";
import { BlogModel } from "../models/blog.model";
import * as BlogsApi from "../utils/blogs.api";

interface ManagePageProps {
  loggedInUser: string;
}

const ManagePage = ({ loggedInUser }: ManagePageProps) => {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);

  async function deleteBlog(blog: BlogModel) {
    try {
      await BlogsApi.deleteBlog(blog._id);
      setBlogs(blogs.filter((existingBlog) => existingBlog._id !== blog._id));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  useEffect(() => {
    async function loadBlogs() {
      try {
        const blogs = await BlogsApi.fetchBlogsByUsername(loggedInUser);
        setBlogs(blogs);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }

    loadBlogs();
  }, [loggedInUser]);
  return (
    <div className={styles.blogFeed}>
      <div className={styles.contentTopPart}>
        <p className={styles.contentText}>MY BLOGS</p>
      </div>
      <div className={styles.blogCardView}>
        {blogs.map((blog) => (
          <Blog
            buttonText="DELETE"
            blog={blog}
            handleClick={deleteBlog}
            key={blog._id}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default ManagePage;
