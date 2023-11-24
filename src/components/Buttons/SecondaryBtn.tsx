import { ButtonProps } from "types/global";
import styles from "./styles.module.css";

const SecondaryBtn = ({ text, size }: ButtonProps) => {
  return (
    <button className={`${styles.secondary} ${styles.button}`}>
      <p className={size ? styles[size] : ""}>{text}</p>
    </button>
  );
};

export default SecondaryBtn;
