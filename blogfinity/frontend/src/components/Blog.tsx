import { BlogModel } from "../models/blog.model";
import BlogFeedCard from "./BlogFeedCard";

interface BlogProps {
  blog: BlogModel;
}

const Blog = ({ blog }: BlogProps) => {
  const { title, author, imageUrl } = blog;
  return (
    <div>
      <BlogFeedCard
        cardTitle={title}
        cardAuthor={author}
        cardImgSrc={imageUrl}
        cardBtnText="READ"
        cardLink="/"
      ></BlogFeedCard>
    </div>
  );
};

export default Blog;
