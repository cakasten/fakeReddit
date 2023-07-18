import Post from "../post/Post";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.data.id} data={post.data} />
      ))}
    </>
  );
};

export default PostList;
