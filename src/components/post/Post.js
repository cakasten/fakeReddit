import Votes from "../votes/Votes";
import styles from "./post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <Votes votes='100' />
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.author}>Posted by: {props.author}</p>
    </div>
  );
};

export default Post;
