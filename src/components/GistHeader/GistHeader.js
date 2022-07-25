import React, { Component } from "react";
import avatar_one from "assets/images/img_avatar.png";
import {
  Header,
  UserImage,
  GistInfo,
  GistHistory,
  GistHeaderControls,
} from "./GistHeader.styles";

class GistHeader extends Component {
  render() {
    return (
      <Header>
        <UserImage>
          <img src={avatar_one} alt="user" />
          <div>
            <GistInfo>
              <span>Developer</span>&nbsp;/&nbsp;
              <span>
                <b>file_name.cpp</b>
              </span>
            </GistInfo>
            <GistHistory>Created 7hrs Ago</GistHistory>
          </div>
          <GistHeaderControls>
            <div>
              <i className="fa-regular fa-pen-to-square"></i> <span>Edit</span>
            </div>
            <div>
              <i className="fa-regular fa-trash-can"></i> <span>Delete</span>
            </div>
            <div>
              <i className="fa-regular fa-star"></i> <span>Star</span>
            </div>
            <div>
              <input type="text" name="" id="" />
            </div>
            <div>
              <i className="fa-solid fa-code-branch"></i>
              <span>Fork</span>
            </div>
            <div>
              <input type="text" name="" id="" />
            </div>
          </GistHeaderControls>
        </UserImage>
      </Header>
    );
  }
}

export default GistHeader;
