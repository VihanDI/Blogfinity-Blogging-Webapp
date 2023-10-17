import styles from "../styles/ReadPage.module.css";
import Button from "../components/Button";
import Form from "../components/Form";

const WritePage = () => {
  return (
    <div>
      <div className={styles.contentTopPart}>
        <p className={styles.contentText}>CREATE A NEW BLOG POST</p>
        <Button buttonText="PUBLISH"></Button>
      </div>
      <div>
        <Form></Form>
      </div>
    </div>
  );
};

export default WritePage;
