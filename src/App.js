import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";

function App() {
  const [postArray, setPostArray] = useState([]);

  function getPosts() {
    fetch("https://www.reddit.com/r/popular.json?limit=10")
      .then((res) => res.json())
      .then((data) => setPostArray(...postArray, data.data.children));
  }

  console.log(postArray);

  useEffect(getPosts, []);
  return (
    <div className="App">
      <Navbar />
      {postArray.map(
        (post) => (
          <Post
            key={post.data.id}
            title={post.data.title}
            author={post.data.author}
            votes={post.data.ups}
            subreddit={post.data.subreddit}
            video={post.data.is_video && post.data.media.reddit_video.fallback_url}
          />
        )
        // : (
        //   <Post
        //     key={post.data.id}
        //     title={post.data.title}
        //     author={post.data.author}
        //     votes={post.data.ups}
        //     subreddit={post.data.subreddit}
        //     thumbnail={post.data.thumbnail}
        //   />
        // )
      )}
    </div>
  );
}

export default App;
