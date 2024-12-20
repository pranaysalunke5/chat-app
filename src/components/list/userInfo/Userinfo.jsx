import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";

const Userinfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "img/avatar.png"} alt="User Avatar" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="img/more.png" alt="More" />
        <img src="img/video.png" alt="Video" />
        <img src="img/edit.png" alt="Edit" />
      </div>
    </div>
  );
};

export default Userinfo;
