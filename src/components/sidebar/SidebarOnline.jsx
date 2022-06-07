import React from "react";

export default function SidebarOnline({ username, profilePicture }) {
  return (
    <div>
      <li>
        <img src={profilePicture} alt="" className="sidebarFriendPhoto" />
        <span className="sidebarFriendName">{username}</span>
      </li>
    </div>
  );
}
