import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../search/search";
import { useState } from "react";
import { setCategory } from "../../slices/appSlice";
import { useDispatch } from "react-redux";

const Navbar = (props) => {
  const [dropdownArrow, setDropdownArrow] = useState(false);
  const dispatch = useDispatch();

  const handleTitleClick = () => {
    dispatch(setCategory("Popular"));
  };

  const handleDropdownHover = (e) => {
    setDropdownArrow(!dropdownArrow);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.containerLeft}>
        <FontAwesomeIcon icon={faBars} />
        <div
          className={styles.category}
          onMouseEnter={handleDropdownHover}
          onMouseLeave={handleDropdownHover}
        >
          <p>{props.category}</p>
          <FontAwesomeIcon icon={!dropdownArrow ? faCaretUp : faCaretDown} />
          <ul>
            {props.categories.map((category) => (
              <li
                onClick={props.selectCategory}
                className={styles.subreddit}
                key={category}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.titleLogo} onClick={handleTitleClick}>
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
    </nav>
  );
};

export default Navbar;
