import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder="Search" />
    </>
  );
};

export default Search;
