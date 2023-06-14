import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";

function App() {
  const [postArray, setPostArray] = useState([]);
  const categoriesArray = [
    "Popular",
    "Programming Humor",
    "Ask Reddit"
  ];

  let [category, setCategory] = useState("Popular");

  const handleCategorySelect = (e) => {
    setCategory(e.target.innerText);
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    setCategory(e.target[1].value)
  }

  useEffect(() => {
    const parsedCategory = category.split(" ").join("").toLowerCase();
    setPostArray([]);
    async function getPosts() {
      try {
        const response = await fetch(
          `https://www.reddit.com/r/${parsedCategory}.json?limit=10`
        );
        const data = await response.json();
        setPostArray(data.data.children);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getPosts();
  }, [category]);

  return (
    <div className="App">
      <Navbar
        category={category}
        categories={categoriesArray}
        selectCategory={handleCategorySelect}
        handleSearchInput={handleSearchInput}
      />
      {postArray.map((post) => (
        <Post
          postData={post}
          key={post.data.id}
          title={post.data.title}
          author={post.data.author}
          votes={post.data.ups}
          subreddit={post.data.subreddit}
          video={
            post.data.is_video && post.data.media.reddit_video.fallback_url
          }
          body={post.data.url}
        />
      ))}
    </div>
  );
}

export default App;
