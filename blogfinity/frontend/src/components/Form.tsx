import styles from "../styles/Form.module.css";
import { BlogInput } from "../utils/blogs.api";
import { useForm } from "react-hook-form";
import * as BlogApi from "../utils/blogs.api";
import { BlogModel } from "../models/blog.model";

interface FormProps {
  onBlogSaved: (blog: BlogModel) => void;
}

const Form = ({ onBlogSaved }: FormProps) => {
  const { register, handleSubmit, reset } = useForm<BlogInput>();

  async function onSubmit(input: BlogInput) {
    try {
      const blogResponse = await BlogApi.createBlog(input);
      onBlogSaved(blogResponse);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      reset();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputFields}>
        <input
          className={styles.userInputSmall}
          placeholder="Blog Title"
          type="text"
          {...register("title", { required: "Require" })}
        />
        <textarea
          className={styles.userInputLarge}
          placeholder="Blog Content"
          {...register("content", { required: "Require" })}
        ></textarea>
        <button className={styles.formSubmitButton} type="submit">
          PUBLISH
        </button>
      </div>
    </form>
  );
};

export default Form;
