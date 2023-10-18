import LinkButton from "../components/LinkButton";
import SubmitButton from "../components/SubmitButton";
import UserInput from "../components/UserInput";
import styles from "../styles/LoginPage.module.css";
import { BiSolidUser, BiSolidLock } from "react-icons/bi";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <div className={styles.title}>
          <p>BLOGFINITY ACCOUNT</p>
          <p className={styles.titleText}>SIGNIN</p>
        </div>
        <div className={styles.form}>
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
          <SubmitButton buttonText="LOG IN"></SubmitButton>
          <p className={styles.formText}>DON'T HAVE AN ACCOUNT?</p>
          <LinkButton cardBtnText="SIGN UP" cardLink="/signup"></LinkButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
