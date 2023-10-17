import styles from "../styles/Button.module.css";

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => {
  return <button className={styles.mainButton}>{buttonText}</button>;
};

export default Button;
