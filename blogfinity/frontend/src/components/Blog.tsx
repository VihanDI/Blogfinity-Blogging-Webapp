import { BlogModel } from "../models/blog.model";
import Card from "./Card";

interface BlogProps {
  blog: BlogModel;
}

const Blog = ({ blog }: BlogProps) => {
  const { title, content, author, imageUrl } = blog;
  return (
    <div>
      <Card
        cardTitle={title}
        cardContent={content}
        cardAuthor={author}
        cardImgSrc={imageUrl}
        cardBtnText="READ"
        cardLink="/"
      ></Card>
    </div>
  );
};

export default Blog;
