import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostArray, setCategory, setIsLoading } from "./slices/appSlice";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";
import PostList from "./components/postList/PostList";

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

  useEffect(() => {
    const parsedCategory = category.split(" ").join("").toLowerCase();
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
      />
      {isLoading ? (
        <>
          <Post />
          <Post />
          <Post />
        </>
      ) : (
        <PostList posts={postArray} />
      )}
    </div>
  );
}

export default App;
