import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Search from "../search/search";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <FontAwesomeIcon icon={faBars} />
      <button className={styles.category}>
        {props.category}
        <FontAwesomeIcon icon={faCaretUp} />
        <ul>
          {props.categories.map((category) => (
            <li onClick={props.selectCategory} key={category}>
              {category}
            </li>
          ))}
        </ul>
      </button>
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
