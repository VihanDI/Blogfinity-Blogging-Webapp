import { useEffect, useState } from "react";
import { BlogModel } from "../models/blog.model";
import Blog from "../components/Blog";
import styles from "../styles/ReadPage.module.css";
import * as BlogsApi from "../utils/blogs.api";

const ReadPage = () => {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);

  function readBlog(blog: BlogModel) {
    console.log(blog);
  }

  useEffect(() => {
    async function loadBlogs() {
      try {
        const blogs = await BlogsApi.fetchBlogs();
        setBlogs(blogs);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }

    loadBlogs();
  }, []);
  return (
    <div className={styles.blogFeed}>
      <div className={styles.contentTopPart}>
        <p className={styles.contentText}>BLOGFINITY RECOMMENDATIONS</p>
      </div>
      <div className={styles.blogCardView}>
        {blogs.map((blog) => (
          <Blog
            buttonText=""
            blog={blog}
            handleClick={readBlog}
            handleCardClick={readBlog}
            key={blog._id}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default ReadPage;
