import Button from "../components/Button";
import UserInput from "../components/UserInput";
import styles from "../styles/SignupPage.module.css";
import { BiSolidUser, BiSolidLock, BiSolidEnvelope } from "react-icons/bi";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <div className={styles.title}>
          <p className={styles.titleText}>CREATE BLOGFINITY ACCOUNT</p>
        </div>
        <div className={styles.form}>
          <div className={styles.inputField}>
            <p className={styles.inputFieldText}>USER EMAIL</p>
            <div className={styles.inputfieldIcon}>
              <BiSolidEnvelope className={styles.icon}></BiSolidEnvelope>
            </div>
            <UserInput></UserInput>
          </div>
          <div className={styles.inputField}>
            <p className={styles.inputFieldText}>USERNAME</p>
            <div className={styles.inputfieldIcon}>
              <BiSolidUser className={styles.icon}></BiSolidUser>
            </div>
            <UserInput></UserInput>
          </div>
          <div className={styles.inputField}>
            <p className={styles.inputFieldText}>PASSWORD</p>
            <div className={styles.inputfieldIcon}>
              <BiSolidLock className={styles.icon}></BiSolidLock>
            </div>
            <UserInput></UserInput>
          </div>
        </div>
        <div className={styles.formButtonContent}>
          <Button buttonText="SIGN UP"></Button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
