import { useEffect, useState } from "react";
import { BlogModel } from "../models/blog.model";
import Blog from "../components/Blog";

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
    <div className="blogCardView">
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog._id}></Blog>
      ))}
    </div>
  );
};

export default ReadPage;
