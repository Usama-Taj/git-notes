import React, { Component } from "react";
import avatar_one from "assets/images/img_avatar.png";
import {
  Header,
  UserImage,
  GistInfo,
  GistHistory,
  GistHeaderControls,
} from "./GistHeader.styles";
import { connect } from "react-redux";
import { starOneGist } from "api/gist.service";

class GistHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { starred: false };
  }
  starGist = () => {
    const { gist_id } = this.props;
    this.setState({ starred: !this.state.starred });
    starOneGist(gist_id).then((res) => console.log(res));
  };
  render() {
    const { avatar, created, username, filename, logged_in, forks } =
      this.props;
    const { starred } = this.state;
    return (
      <Header>
        <UserImage>
          <img src={avatar} alt="user" />
          <div>
            <GistInfo>
              <span>{username}</span>&nbsp;/&nbsp;
              <span>
                <b>{filename}</b>
              </span>
            </GistInfo>
            <GistHistory>Created {created} Ago</GistHistory>
          </div>
          {logged_in && (
            <GistHeaderControls>
              <div id="edit">
                <i className="fa-regular fa-pen-to-square"></i>
                <label>Edit</label>
              </div>
              <div id="delete">
                <i className="fa-regular fa-trash-can"></i>{" "}
                <label>Delete</label>
              </div>
              <div id="star" onClick={this.starGist}>
                <i
                  className={`fa-${starred ? "solid" : "regular"} fa-star`}
                ></i>
                <label>Star</label>
              </div>
              <div id="star-info">
                <input type="text" name="" id="" value="0" readOnly />
              </div>
              <div id="fork">
                <i className="fa-solid fa-code-branch"></i>
                <label>Fork</label>
              </div>
              <div id="fork-info">
                <input type="text" name="" id="" value={forks} readOnly />
              </div>
            </GistHeaderControls>
          )}
        </UserImage>
      </Header>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    gists: { logged_in },
  } = state;
  return { logged_in };
};
export default connect(mapStateToProps, null)(GistHeader);
