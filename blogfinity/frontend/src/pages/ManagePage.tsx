import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Blog from "../components/Blog";
import styles from "../styles/ReadPage.module.css";
import { BlogModel } from "../models/blog.model";
import * as BlogsApi from "../utils/blogs.api";

interface ManagePageProps {
  loggedInUser: string;
}

const ManagePage = ({ loggedInUser }: ManagePageProps) => {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);

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
          <Blog blog={blog} key={blog._id}></Blog>
        ))}
      </div>
    </div>
  );
};

export default ManagePage;
