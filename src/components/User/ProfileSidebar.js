import React from "react";
import { useSelector } from "react-redux";
import avatar from "../../assets/images/Avatar-logout.png";
import { Link } from "react-router-dom";
const ProfileSidebar = () => {
  const { loading, user } = useSelector((state) => state.user);
  return (
    <>
      <aside id="profileSidebar">
        <div className="sidebar_container">
          <div className="sidebar_top">
            <div className="sidebar_avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="user_name">
              <span>Hello,</span>
              {user?.name}
            </div>
          </div>
          <div className="sidebar_list">
            <ul>
              <li>
                <span>Account Settings</span>
                <Link to="/">Profile Info</Link>
                <Link to="/">Change Password</Link>
                <Link to="/">Update Profile</Link>
              </li>

              <li>
                <span>My Orders</span>
                <Link to="/orders">Orders</Link>
              </li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProfileSidebar;
