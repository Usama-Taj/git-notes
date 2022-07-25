import React from "react";
import avatar_one from "assets/images/img_avatar2.png";
import {
  ProfileInfo,
  ProfileImage,
  ViewProfileButton,
} from "./ProfileContent.styles";

const ProfileContent = () => {
  return (
    <div>
      <ProfileInfo>
        <div>
          <ProfileImage src={avatar_one} alt="user" />
        </div>
        <div>Some Name</div>
        <div>
          <ViewProfileButton>View GitHub Profile</ViewProfileButton>
        </div>
      </ProfileInfo>
    </div>
  );
};

export default ProfileContent;
