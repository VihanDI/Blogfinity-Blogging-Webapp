import EditForm from "./EditForm";
import { BlogModel } from "../models/blog.model";
import styles from "../styles/WritePage.module.css";

interface WriteUpdatePageProps {
  blog?: BlogModel | null;
}

const WriteUpdatePage = ({ blog }: WriteUpdatePageProps) => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentTopPart}>
        <p className={styles.contentText}>UPDATE BLOG POST</p>
      </div>
      <div>
        <EditForm blogToEdit={blog}></EditForm>
      </div>
    </div>
  );
};

export default WriteUpdatePage;
