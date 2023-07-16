import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
// import { setSearchTerm } from "../../actions/actions";
import { setSearchTerm } from "../../slices/searchSlice";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    e.preventDefault();
    const searchTerm = e.target[1].value;
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <form onSubmit={handleSearchInput}>
      <button type="submit">
        {<FontAwesomeIcon icon={faMagnifyingGlass} />}
      </button>
      <input type="text" placeholder="Search" className={styles.search} />
    </form>
  );
};

export default Search;
