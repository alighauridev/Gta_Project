import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BackdropLoading from "../Layouts/BackdropLoading";
import MetaData from "../Layouts/MetaData";
import { capitalize } from "@mui/material";
import ProfileSidebar from "./ProfileSidebar";
import "./User.scss"
const Profile = () => {
  const loading = false;
  //   const dispatch = useDispatch();

  //   const { user, loading } = useSelector();

  return (
    <>
      <MetaData title={`${capitalize("talha").substring(0, 10)} is Profile`} />
      <section id="profile">
        <BackdropLoading open={loading} />
        <div className="container">
          <ProfileSidebar />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          voluptates quidem sequi ipsam, laudantium eos totam, quos vel quis
          beatae quaerat necessitatibus commodi voluptatibus? Alias nemo
          pariatur laudantium maxime perferendis!
        </div>
      </section>
    </>
  );
};

export default Profile;
