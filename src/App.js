import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostArray, setCategory, setIsLoading } from "./slices/appSlice";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";

function App() {
  const dispatch = useDispatch();
  const categoriesArray = ["Popular", "Programming Humor", "Ask Reddit"];

  const postArray = useSelector((state) => state.app.postArray);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const isLoading = useSelector((state) => state.app.isLoading);
  const category = useSelector((state) => state.app.category);

  const handleCategorySelect = (e) => {
    dispatch(setCategory(e.target.innerText));
  };

  const handleClick = (e) => {
    dispatch(setCategory(e.target.innerText.slice(2).toLowerCase()));
  };

  useEffect(() => {
    const parsedCategory = category.split(" ").join("").toLowerCase();
    setPostArray([]);
    async function getPosts() {
      try {
        dispatch(setIsLoading(true));
        const response = await fetch(
          `https://www.reddit.com/r/${parsedCategory}.json?limit=20&raw_json=1`
        );
        const data = await response.json();
        dispatch(setPostArray(data.data.children));
        dispatch(setIsLoading(false));
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    getPosts();
  }, [category, dispatch]);

  useEffect(() => {
    const parseSearchTerm = searchTerm.split(" ").join("%20");
    async function search() {
      try {
        dispatch(setIsLoading(true));
        const response = await fetch(
          `https://www.reddit.com/search.json?q=${parseSearchTerm}&raw_json=1`
        );
        const data = await response.json();
        dispatch(setPostArray(data.data.children));
        dispatch(setIsLoading(false));
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    search();
  }, [searchTerm, dispatch]);

  return (
    <div className="App">
      <Navbar
        category={category}
        categories={categoriesArray}
        selectCategory={handleCategorySelect}
        // handleSearchInput={handleSearchInput}
      />
      {isLoading ? (
        <>
          <Post />
          <Post />
          <Post />
        </>
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
