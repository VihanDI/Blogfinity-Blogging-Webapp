import { BlogModel } from "../models/blog.model";
import Card from "./Card";

interface BlogProps {
  blog: BlogModel;
}

const Blog = ({ blog }: BlogProps) => {
  const { title, content } = blog;
  return (
    <div>
      <Card
        cardTitle={title}
        cardContent={content}
        cardImgSrc="https://picsum.photos/500/200"
        cardBtnText="READ"
        cardLink="/"
      ></Card>
    </div>
  );
};

export default Blog;
