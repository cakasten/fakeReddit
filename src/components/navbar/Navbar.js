import "./navbar.css";
import Search from "./search/search";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <p>dropdown</p>
      <div id="titleLogo">
        <img src={require('../../redditLogo.png')} alt="reddit logo"/>
        <h1>Fake Reddit</h1>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
