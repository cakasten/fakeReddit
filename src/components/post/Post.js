import Votes from "../votes/Votes";
import styles from "./post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <Votes votes={props.votes} />
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.author}>Posted by: {props.author}</p>
      <p className={styles.subreddit}>r/{props.subreddit}</p>
      {props.video ? <video className={styles.body} controls autoPlay width='100%' height='100%'>
        <source src={props.video} type="video/mp4" />
      </video> : <p className={styles.body}>No Video</p>}
    </div>
  );
};

export default Post;
