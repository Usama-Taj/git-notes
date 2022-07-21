import ProfileGistItem from "components/ProfileGistItem/ProfileGistItem";

const ProfileView = () => {
  return (
    <div className="profile">
      <div>
        <div className="profile_content">
          <div className="img">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="user"
            />
          </div>
          <div className="name">Some Name</div>
          <div className="controls">
            <button>View GitHub Profile</button>
          </div>
        </div>
      </div>
      <div className="profile_gists">
        <ProfileGistItem />
      </div>
    </div>
  );
};

export default ProfileView;
