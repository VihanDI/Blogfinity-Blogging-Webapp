import SubmitButton from "../components/SubmitButton";
import styles from "../styles/SignupPage.module.css";
import { BiSolidUser, BiSolidLock, BiSolidEnvelope } from "react-icons/bi";
import { SignUpCredentials } from "../utils/users.api";
import * as UserApi from "../utils/users.api";
import { UserModel } from "../models/user.model";
import { useForm } from "react-hook-form";

interface SignupPageProps {
  onSignupSuccessful: (user: UserModel) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignupPage = ({ onSignupSuccessful }: SignupPageProps) => {
  const { register, handleSubmit, reset } = useForm<SignUpCredentials>();

  async function onSubmit(input: SignUpCredentials) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const onSignupSuccessful = (user: UserModel) => {};

      const newUser = await UserApi.signUp(input);
      onSignupSuccessful(newUser);
      reset();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              <input
                className={styles.userInput}
                type="email"
                {...register("email", { required: "Require" })}
              ></input>
            </div>
            <div className={styles.inputField}>
              <p className={styles.inputFieldText}>USERNAME</p>
              <div className={styles.inputfieldIcon}>
                <BiSolidUser className={styles.icon}></BiSolidUser>
              </div>
              <input
                className={styles.userInput}
                {...register("username", { required: "Require" })}
              ></input>
            </div>
            <div className={styles.inputField}>
              <p className={styles.inputFieldText}>PASSWORD</p>
              <div className={styles.inputfieldIcon}>
                <BiSolidLock className={styles.icon}></BiSolidLock>
              </div>
              <input
                className={styles.userInput}
                type="password"
                {...register("password", { required: "Require" })}
              ></input>
            </div>
          </div>
          <div className={styles.formButtonContent}>
            <SubmitButton buttonText="SIGN UP"></SubmitButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupPage;
