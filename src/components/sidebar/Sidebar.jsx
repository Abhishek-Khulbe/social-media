import SidebarOnline from "./SidebarOnline";
import { Users } from "../../dummyData";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarLinks">
        <li>
          <i className="fa-solid fa-rss"></i>
          <span>Feed</span>
        </li>
        <li>
          <i className="fa-solid fa-comment-dots"></i>
          <span>Chats</span>
        </li>
        <li>
          <i className="fa-solid fa-video"></i>
          <span>Videos</span>
        </li>
        <li>
          <i className="fa-solid fa-user-group"></i>
          <span>Groups</span>
        </li>
        <li>
          <i className="fa-solid fa-bookmark"></i>
          <span>Bookmarks</span>
        </li>
        <li>
          <i className="fa-solid fa-circle-question"></i>
          <span>Questions</span>
        </li>
        <li>
          <i className="fa-solid fa-briefcase"></i>
          <span>Jobs</span>
        </li>
        <li>
          <i className="fa-solid fa-calendar-days"></i>
          <span>Events</span>
        </li>
        <li>
          <i className="fa-solid fa-graduation-cap"></i>
          <span>Courses</span>
        </li>
      </ul>
      <button className="sidebarBtn">Show More</button>
      <div className="sidebarLine">
        <hr></hr>
      </div>
      <ul className="sidebarFriend">
        {Users.map((u) => {
          return <SidebarOnline key={u.id} {...u} />;
        })}
      </ul>
    </div>
  );
}
