import "./rightbar.css";
import { Users } from "../../dummyData";
import RightbarOnline from "./RightbarOnline";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarBirthday">
        <img src="assets/gift.png" alt="" className="gift" />
        <p>
          <span className="rightbarBold">Pola Foster</span> and{" "}
          <span className="rightbarBold">3 other friends </span>have their
          birthdays today!
        </p>
      </div>
      <img className="rightbarPhoto" src="/assets/ad.png" />
      <div className="rightbarOnline">
        <span className="online">Online Friends</span>
        <ul className="rightbarOnlineFriends">
          {Users.map((u) => {
            return <RightbarOnline key={u.id} {...u} />;
          })}
        </ul>
      </div>
    </div>
  );
}
