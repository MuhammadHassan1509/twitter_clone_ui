// components/posts/PostContent.jsx
const PostContent = ({ text, postImg }) => (
  <div className="pl-1">
    <div>{text}</div>
    {postImg && (
      <div className="postimg pt-2 pr-2">
        <img className="rounded-2xl w-full" src={postImg} alt="post" />
      </div>
    )}
  </div>
);

export default PostContent;
