import Votes from "../votes/Votes";
import styles from "./post.module.css";

const Post = (props) => {
  console.log(props.postData);
  return (
    <div className={styles.post}>
      <Votes votes={props.votes} styles={styles.vote} />
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.author}>Posted by: {props.author}</p>
      <p className={styles.subreddit}>r/{props.subreddit}</p>
      {props.video ? (
        <div className={styles.body}>
          <video
            controls
            src={props.video}
            type="video/mp4"
            width="100%"
            height="auto"
          ></video>
        </div>
      ) : (
        <img className={styles.body} alt="nothing to see" src={props.body} />
      )}
    </div>
  );
};

export default Post;
