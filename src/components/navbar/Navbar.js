import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Search from "../search/search";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.dropdown}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={styles.titleLogo}>
        <img src={require("../../redditLogo.png")} alt="reddit logo" />
        <h1>Fake Reddit</h1>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
