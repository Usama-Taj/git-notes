import React, { Component } from "react";
import avatar_one from "assets/images/img_avatar.png";
import {
  GistItem,
  GistHeader,
  GistPorfileImageArea,
  GistProfileImage,
  GistInfo,
  GistHistory,
  GistControls,
  GistControlLabel,
  Card,
  CardContent,
  Table,
} from "./ProfileGistItem.styles";
import { getTimeFromDate } from "utilities/utilityFunctions";
import { getGistFile } from "api/gist.service";
class ProfileGistItem extends Component {
  constructor(props) {
    super(props);
    this.state = { fileContent: [] };
  }
  componentDidMount() {
    const { files } = this.props.gist;

    getGistFile(files[Object.keys(files)[0]].raw_url).then((response) =>
      this.setState({ fileContent: response.split("\n") })
    );
  }
  renderFileContent = (fileContent) => {
    console.log("Content", fileContent);
    return fileContent.map((line, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{line.length > 50 ? `${line.substring(0, 50)}...` : line}</td>
      </tr>
    ));
  };
  render() {
    const {
      id,
      owner: { login: username, avatar_url: avatar },
      files,
      created_at,
      description,
    } = this.props.gist;
    const logged_in = JSON.parse(localStorage.getItem("gist_app")).logged_in;
    const { fileContent } = this.state;
    return (
      <GistItem>
        <GistHeader>
          <GistPorfileImageArea>
            <GistProfileImage src={avatar} alt="user" />
            <div>
              <GistInfo>
                <span>{username}</span>&nbsp;/&nbsp;
                <span>
                  <b>{Object.keys(files)[0]}</b>
                </span>
              </GistInfo>
              <GistHistory>
                Created {getTimeFromDate(created_at)} Ago
              </GistHistory>
            </div>
            {logged_in && (
              <GistControls>
                <div>
                  <i className="fa-regular fa-star"></i>
                  <GistControlLabel>Star</GistControlLabel>
                </div>
                <div>
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <i className="fa-solid fa-code-branch"></i>
                  <GistControlLabel>Fork</GistControlLabel>
                </div>
                <div>
                  <input type="text" name="" id="" />
                </div>
              </GistControls>
            )}
          </GistPorfileImageArea>
        </GistHeader>
        <div>
          <Card>
            <CardContent>
              <Table>
                <tbody>
                  {fileContent.length > 0 &&
                    this.renderFileContent(fileContent)}
                </tbody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </GistItem>
    );
  }
}

export default ProfileGistItem;
