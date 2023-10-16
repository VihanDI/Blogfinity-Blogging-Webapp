import { useEffect, useState } from "react";
import "./App.css";
import { BlogModel } from "./models/blog.model";
import Blog from "./components/Blog";

function App() {
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
    <div className="App">
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog._id}></Blog>
      ))}
    </div>
  );
}

export default App;
