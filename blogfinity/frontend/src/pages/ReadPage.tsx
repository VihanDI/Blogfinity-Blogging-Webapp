import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BlogModel } from "../models/blog.model";
import Blog from "../components/Blog";
import styles from "../styles/ReadPage.module.css";

const ReadPage = () => {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const response = await fetch("http://localhost:8080/api/blogs", {
          method: "GET",
        });

        const blogs = await response.json();
        setBlogs(blogs);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }

    loadBlogs();
  }, []);
  return (
    <div>
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

export default ReadPage;
