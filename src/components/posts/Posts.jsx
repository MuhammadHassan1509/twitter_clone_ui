// components/posts/Posts.jsx
import Post from "./Post";
import postsData from "../data/PostsData.jsx";

const Posts = () => (
  <div className="posts pt-3">
    {postsData.map((post, index) => (
      <Post key={index} {...post} />
    ))}
  </div>
);

export default Posts;
