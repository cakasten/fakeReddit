import "./post.css";

const Post = (props) => {
  return (
    <div id="post">
      <h1>{props.title}</h1>
      <p>Author: {props.author}</p>
    </div>
  );
};

export default Post;
