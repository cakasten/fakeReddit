import { useState } from "react";

// import VideoControls from "../videoControls/VideoControls";
import Votes from "../votes/Votes";
import styles from "./post.module.css";
import { setCategory } from "../../slices/appSlice";
import { useDispatch } from "react-redux";

const Post = (postData) => {
  const [postState, setPostState] = useState(postData.data);
  const dispatch = useDispatch();

  const incrementVotes = () => {
    const newVote = postState.ups + 1;
    setPostState({
      ...postState,
      ups: newVote,
    });
  };
  const decrementVotes = () => {
    const newVote = postState.ups - 1;
    setPostState({
      ...postState,
      ups: newVote,
    });
  };

  const handleClick = (e) => {
    dispatch(setCategory(e.target.innerText.slice(2).toLowerCase()));
  };
  return postState ? (
    <div className={styles.post}>
      <Votes
        votes={postState.ups}
        styles={styles.vote}
        upVote={incrementVotes}
        downVote={decrementVotes}
      />
      <h1 className={styles.title}>{postState.title}</h1>
      <p className={styles.author}>Posted by: {postState.author}</p>
      <p className={styles.subreddit} onClick={handleClick}>
        r/{postState.subreddit}
      </p>
      {(postState.is_video && (
        <div className={styles.body}>
          <video
            src={postState.media.reddit_video.fallback_url}
            type="video/mp4"
            width="100%"
            height="auto"
            controls
          ></video>
          {/* <VideoControls /> */}
        </div>
      )) ||
        (postState.preview && (
          <img
            src={postState.preview.images[0].source.url}
            alt="nothing shown"
            className={styles.body}
          />
        ))}
      {postState.selftext && (
        <p className={styles.bodyText}>{postState.selftext}</p>
      )}
    </div>
  ) : (
    <div className={styles.post}>
      <Votes />
      <h1 className={styles.title}>Loading</h1>
    </div>
  );
};

export default Post;
