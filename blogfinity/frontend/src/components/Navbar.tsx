import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <img
          className={styles.navbarLogo}
          src="src\assets\images\logoblack.png"
          alt="Logo"
        />
        <Link className={styles.titilePartOne} to={"/"}>
          BLOG
        </Link>
        <Link className={styles.titilePartTwo} to={"/"}>
          FINITY
        </Link>
      </div>
      <div className={styles.navbarTabs}>
        <Link className={styles.navbarTab} to={"/write"}>
          WRITE
        </Link>
        <Link className={styles.navbarTab} to={"/read"}>
          READ
        </Link>
        <Link className={styles.navbarTab} to={"/login"}>
          LOG IN
        </Link>
        <BiMenu className={styles.menuIcon}></BiMenu>
      </div>
    </div>
  );
};

export default Navbar;
