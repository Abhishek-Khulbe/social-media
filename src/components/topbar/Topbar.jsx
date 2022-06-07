import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <h1 className="topbarTitle">Lamasocial</h1>
      <div className="topbarSearch">
        <i className="topbarSearchIcon fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="Search for friend, post or video" />
      </div>
      <div className="topbarLinks">
        <ul className="topbarLinksFirst">
          <li>Homepage</li>
          <li>Timeline</li>
        </ul>
        <ul className="topbarLinksSecond">
          <li>
            <i class="fa-solid fa-user"></i>
          </li>
          <li>
            <i class="fa-solid fa-message" />
          </li>
          <li>
            <i class="fa-solid fa-bell" />
          </li>
        </ul>
      </div>
      <img src="assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
  );
}
