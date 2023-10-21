import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BlogModel } from "../models/blog.model";
import Blog from "../components/Blog";
import styles from "../styles/ReadPage.module.css";
import * as BlogsApi from "../utils/blogs.api";

const ReadPage = () => {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function readBlog(blog: BlogModel) {}

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
        <div className={styles.searchBar}>
          <p className={styles.searchBarText}>SEARCH</p>
          <input className={styles.searchBarInput}></input>
          <button className={styles.searchBarButton}>
            <BiSearch className={styles.searchBarIcon}></BiSearch>
          </button>
        </div>
      </div>
      <div className={styles.blogCardView}>
        {blogs.map((blog) => (
          <Blog
            buttonText="READ"
            blog={blog}
            handleClick={readBlog}
            key={blog._id}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default ReadPage;
