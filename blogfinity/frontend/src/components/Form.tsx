import styles from "../styles/Form.module.css";

const Form = () => {
  return (
    <div>
      <div className={styles.inputFields}>
        <input
          className={styles.userInputSmall}
          placeholder="Blog Title"
          type="text"
        />
        <textarea
          className={styles.userInputLarge}
          placeholder="Blog Content"
        ></textarea>
      </div>
    </div>
  );
};

export default Form;
