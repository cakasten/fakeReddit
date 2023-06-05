import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder="Search" className={styles.search} />
    </>
  );
};

export default Search;
