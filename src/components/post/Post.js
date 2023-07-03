import VideoControls from "../videoControls/VideoControls";
import Votes from "../votes/Votes";
import styles from "./post.module.css";

const Post = (props) => {
  const {
    votes,
    title,
    author,
    subreddit,
    video,
    bodyImg,
    postData,
    handleClick,
  } = props;
  const noImgKeywords = ["default", "self", "image", ""];
  return (
    <div className={styles.post}>
      <Votes votes={votes} styles={styles.vote} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.author}>Posted by: {author}</p>
      <p className={styles.subreddit} onClick={handleClick}>r/{subreddit}</p>
      {video && (
        <div className={styles.body}>
          <video
            src={props.video}
            type="video/mp4"
            width="100%"
            height="auto"
          ></video>
          <VideoControls />
        </div>
      )}
      {!noImgKeywords.includes(bodyImg) && (
        <img src={bodyImg} alt="nothing shown" className={styles.body} />
      )}
      {postData.data.selftext && (
        <p className={styles.bodyText}>{postData.data.selftext}</p>
      )}
    </div>
  );
};

export default Post;
