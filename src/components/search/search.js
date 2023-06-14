import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <form onSubmit={props.handleSearchInput}>
      <button type="submit">
        {<FontAwesomeIcon icon={faMagnifyingGlass} />}
      </button>
      <input type="text" placeholder="Search" className={styles.search} />
    </form>
  );
};

export default Search;
