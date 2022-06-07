import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ desc, photo, date, like, comment, userId }) {
  const user = Users.filter((u) => u.id == userId);
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(true);

  const likeHandler = () => {
    if (isLiked) setLikes((like) => like + 1);
    else setLikes((like) => like - 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postHeader">
        <div className="postHeaderUser">
          <img src={user[0].profilePicture} alt="" className="postUserImg" />
          <span className="postUsername">{user[0].username}</span>
          <span className="postTime">{date}</span>
        </div>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div className="postBody">
        <span className="postCaption">{desc}</span>
        <img src={photo} alt="" className="postImg" />
      </div>
      <div className="postBottom">
        <div className="postLikes" onClick={likeHandler}>
          <img src="/assets/like.png" alt="" />
          <img src="/assets/heart.png" alt="" className="postHeart" />
          <span className="postLike">{likes} people like it</span>
        </div>
        <span className="postComments">{comment} comments</span>
      </div>
    </div>
  );
}
