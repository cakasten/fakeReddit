import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";

function App() {
  const [postArray, setPostArray] = useState([]);

  function getPosts() {
    fetch("https://www.reddit.com/r/popular.json?limit=5")
      .then((res) => res.json())
      .then((data) => setPostArray(...postArray, data.data.children));
  }

  console.log(postArray)

  useEffect(getPosts, []);
  return (
    <div className="App">
      <Navbar />
      {postArray.map(post => <Post key={post.data.id} title={post.data.title} author={post.data.author} body={post.data.selftext} votes={post.data.ups} />)} 
    </div>
  );
}

export default App;
