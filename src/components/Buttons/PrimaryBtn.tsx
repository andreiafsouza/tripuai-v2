import { ButtonProps } from "types/global";
import styles from "./styles.module.css";

const PrimaryBtn = ({ text, size }: ButtonProps) => {
  return (
    <button className={`${styles.primary} ${styles.button}`}>
      <p className={size ? styles[size] : ""}>{text}</p>
    </button>
  );
};

export default PrimaryBtn;
