import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Search from "./search/search";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <div id="dropdown">
      <FontAwesomeIcon icon={faBars} />
      </div>
      <div id="titleLogo">
        <img src={require("../../redditLogo.png")} alt="reddit logo" />
        <h1>Fake Reddit</h1>
      </div>
      <div id="search">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
