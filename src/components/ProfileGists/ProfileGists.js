import React from "react";
import ProfileGistItem from "components/ProfileGistItem/ProfileGistItem";
import { ProfileGistList } from "./ProfileGists.styles";

const ProfileGists = () => {
  return (
    <ProfileGistList>
      <ProfileGistItem />
    </ProfileGistList>
  );
};

export default ProfileGists;
