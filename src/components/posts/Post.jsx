// components/posts/Post.jsx
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";

const Post = ({ profileImg, name, username, time, text, postImg, comments, retweets, likes, views }) => (
  <div className="post border-b border-gray-700">
    <div className="flex">
      {/* Profile Image */}
      <div className="image pl-3 my-3">
        <img className="w-12 h-12 rounded-full" src={profileImg} alt={name} />
      </div>

      {/* Post Content */}
      <div className="content my-2 w-full">
        <PostHeader name={name} username={username} time={time} />
        <PostContent text={text} postImg={postImg} />
        <PostActions comments={comments} retweets={retweets} likes={likes} views={views} />
      </div>
    </div>
  </div>
);

export default Post;
