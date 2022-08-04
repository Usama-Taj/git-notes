import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import logo from "assets/logos/logo.svg";
import avatar from "assets/images/img_avatar.png";
import {
  HeaderArea,
  NavBar,
  NavBarLogo,
  NavBarControls,
  UserImage,
  UserMenu,
  MenuItem,
  MenuBar,
  SearchInput,
} from "./HeaderContent.styles";
import { withRouter } from "hoc/withRouter";
import { getGistsByUser } from "api/gist.service";
import { connect } from "react-redux";
import { setLoggedInState } from "redux-state/gists/actions";
import { fetchGistList } from "redux-state/gists";
import { Input } from "antd";

const Header = ({ logged_in, loginUser, router }) => {
  // Data Variable
  const GITHUB_PROFILE = "https://github.com/Usama-Taj";

  // States
  const [username, setUsername] = useState("");

  // Functions
  const navigateToLogin = (e) => {
    router.navigate("/login");
  };

  const logoutUser = (e) => {
    console.log("Log Out");
    localStorage.setItem("gist_app", JSON.stringify({ logged_in: false }));
    loginUser(false);
    router.navigate("/login");
  };

  const handleSearchChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      router.navigate(`/search/${username}`, { replace: true });
    }
  };

  const displayYourGist = () => {
    router.navigate(`/profile/${process.env.USERNAME}`);
  };

  const handleAddGist = () => {
    router.navigate(`/add-gist`);
  };

  const displayStarredGists = () => {
    router.navigate("/starred", { replace: true });
  };

  return (
    <>
      <HeaderArea>
        <NavBar>
          <a href="#">
            <NavBarLogo src={logo} alt="Emumba Logo" />
          </a>
          <NavBarControls>
            <SearchInput
              size="large"
              suffix={<SearchOutlined />}
              placeholder="Search Name..."
              onChange={handleSearchChange}
              onKeyUp={handleEnter}
            />

            {!logged_in ? (
              <button onClick={navigateToLogin}>Login</button>
            ) : (
              <MenuBar>
                <UserImage src={avatar} alt="UserImage" />
                <UserMenu className="content">
                  <MenuItem>Signed in as</MenuItem>
                  <MenuItem>Usama Taj</MenuItem>
                  <MenuItem clickable onClick={displayYourGist}>
                    Your Gists
                  </MenuItem>
                  <MenuItem clickable onClick={handleAddGist}>
                    Add Gists
                  </MenuItem>
                  <MenuItem clickable onClick={displayStarredGists}>
                    Starred Gists
                  </MenuItem>
                  <hr />
                  <MenuItem clickable>
                    <a href={GITHUB_PROFILE} target="_blank">
                      Your Github profile
                    </a>
                  </MenuItem>
                  <MenuItem clickable onClick={logoutUser}>
                    Log Out
                  </MenuItem>
                </UserMenu>
              </MenuBar>
            )}
          </NavBarControls>
        </NavBar>
      </HeaderArea>
      <div className="under-header"></div>
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    gists: { logged_in },
  } = state;
  return { logged_in };
};
const mapDispatchToProps = {
  loginUser: setLoggedInState,
  getList: fetchGistList,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
