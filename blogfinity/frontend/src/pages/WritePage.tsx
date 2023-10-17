import styles from "../styles/WritePage.module.css";
import Form from "../components/Form";

const WritePage = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentTopPart}>
        <p className={styles.contentText}>CREATE A NEW BLOG POST</p>
      </div>
      <div>
        <Form onBlogSaved={() => {}}></Form>
      </div>
    </div>
  );
};

export default WritePage;
