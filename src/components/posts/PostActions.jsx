// components/posts/PostActions.jsx
import ActionIcon from "../ui/ActionIcon";

const PostActions = ({ comments, retweets, likes, views }) => (
  <div className="icons flex mx-2 my-2 justify-around text-gray-600 w-[90%]">
    <ActionIcon icon="chat_bubble" count={comments} />
    <ActionIcon icon="repeat" count={retweets} />
    <ActionIcon icon="favorite" count={likes} />
    <ActionIcon icon="bar_chart" count={views} />
  </div>
);

export default PostActions;
