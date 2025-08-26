// components/posts/PostHeader.jsx
const PostHeader = ({ name, username, time }) => (
  <div className="flex items-center space-x-2">
    <span className="font-bold hover:underline hover:cursor-pointer">{name}</span>
    <span className="text-gray-400 hover:cursor-pointer">@{username} · {time}</span>
  </div>
);

export default PostHeader;
