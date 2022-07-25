import React, { Component } from "react";
import ProfileGists from "components/ProfileGists/ProfileGists";
import ProfileContent from "components/ProfileContent/ProfileContent";
import { ProfileView } from "./Profile.styles";

class Profile extends Component {
  render() {
    return (
      <ProfileView>
        <ProfileContent />
        <ProfileGists />
      </ProfileView>
    );
  }
}

export default Profile;
