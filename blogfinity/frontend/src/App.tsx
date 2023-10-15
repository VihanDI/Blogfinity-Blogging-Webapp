import { useEffect, useState } from "react";
import "./App.css";
import { BlogModel } from "./models/blog.model";

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

  return <div className="App">{JSON.stringify(blogs)}</div>;
}

export default App;
