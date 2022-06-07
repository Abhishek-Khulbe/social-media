import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareUser">
        <img src="/assets/person/1.jpeg" alt="" className="shareImg" />
        <input
          type="text"
          className="shareInput"
          placeholder="What's in your mind Safak?"
        />
      </div>
      <div className="shareLine">
        <hr />
      </div>
      <div className="shareBtns">
        <ul className="shareOptions">
          <li>
            <i class="photo fa-solid fa-images"></i>
            <span>Photo or Video</span>
          </li>
          <li>
            <i class="tag fa-solid fa-tag"></i> <span>Tag</span>
          </li>
          <li>
            <i class="location fa-solid fa-location-dot"></i>
            <span>Location</span>
          </li>
          <li>
            <i class="feeling fa-solid fa-face-grin-wide"></i>
            <span>Feeling</span>
          </li>
        </ul>
        <button className="shareBtn">Share</button>
      </div>
    </div>
  );
}
