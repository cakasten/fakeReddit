import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";

function App() {
  const [postArray, setPostArray] = useState([]);
  const categoriesArray = ["Popular", "Programming Humor", "Ask Reddit"];
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  let [category, setCategory] = useState("Popular");

  const handleCategorySelect = (e) => {
    setCategory(e.target.innerText);
  };

  const handleClick = (e) => {
    setCategory(e.target.innerText.slice(2).toLowerCase());
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    // setCategory(e.target[1].value);
    setSearchTerm(e.target[1].value);
  };

  useEffect(() => {
    const parsedCategory = category.split(" ").join("").toLowerCase();
    setPostArray([]);
    async function getPosts() {
      try {
        const response = await fetch(
          `https://www.reddit.com/r/${parsedCategory}.json?limit=20&raw_json=1`
        );
        const data = await response.json();
        setPostArray(data.data.children);
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    getPosts();
    setIsLoading(false);
  }, [category]);

  useEffect(() => {
    const parseSearchTerm = searchTerm.split(" ").join("%20");
    async function search() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.reddit.com/search.json?q=${parseSearchTerm}`
        );
        const data = await response.json();
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    search();
  }, [searchTerm]);

  return (
    <div className="App">
      <Navbar
        category={category}
        categories={categoriesArray}
        selectCategory={handleCategorySelect}
        handleSearchInput={handleSearchInput}
      />
      {isLoading ? (
        <Post />
      ) : (
        postArray.map(
          (post) =>
            !post.data.over_18 && (
              <Post
                handleClick={handleClick}
                postData={post}
                key={post.data.id}
                title={post.data.title}
                author={post.data.author}
                votes={post.data.ups}
                subreddit={post.data.subreddit}
                video={
                  post.data.is_video &&
                  post.data.media.reddit_video.fallback_url
                }
                bodyText={post.data.selftext}
                bodyImg={post.data.preview}
              />
            )
        )
      )}
    </div>
  );
}

export default App;
