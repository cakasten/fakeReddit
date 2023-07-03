import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Search from "../search/search";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.containerLeft}>
        <FontAwesomeIcon icon={faBars} />
        <div className={styles.category}>
          <p>{props.category}</p>
          <FontAwesomeIcon icon={faCaretUp} />
          <ul>
            {props.categories.map((category) => (
              <li onClick={props.selectCategory} key={category}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.titleLogo}>
          <img src={require("../../redditLogo.png")} alt="reddit logo" />
          <h1>Fake Reddit</h1>
        </div>
      </div>
      <div className={styles.containerRight}>
        <Search
          className={styles.search}
          handleSearchInput={props.handleSearchInput}
        />
      </div>
    </div>
  );
};

export default Navbar;
