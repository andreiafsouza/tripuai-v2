import {
  PrimaryBtn,
  SecondaryBtn,
  OutlinedBtn,
} from "@/components/Buttons/Buttons";
import Logo from "../Logo/Logo";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo size="small" />
        <PrimaryBtn text="Menu" size="small" />
      </div>
    </header>
  );
};

export default Header;
