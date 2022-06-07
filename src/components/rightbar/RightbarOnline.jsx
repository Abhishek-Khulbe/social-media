import React from "react";

export default function RightbarOnline({ username, profilePicture }) {
  return (
    <div>
      <li>
        <img src={profilePicture} alt="" className="rightbarFriendImg" />
        <span className="rightbarFriendName">{username}</span>
      </li>
    </div>
  );
}
