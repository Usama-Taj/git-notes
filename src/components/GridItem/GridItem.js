import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardContent,
  CardInfo,
  CardFooter,
  History,
  UserImage,
} from "./GridItem.styles";
import GridFileView from "components/GridFileView/GridFileView";
import { withRouter } from "hoc/withRouter";
import { setSelectedGist } from "redux-state/gists/actions";
import { getTimeCreated } from "utilities/utilityFunctions";
import { getGistFile } from "api/gist.service";

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = { fileContent: [] };
  }
  getValidData = (data) => {
    const extention = data?.match(/\.\w*$/) ?? "";
    const filename = data?.replace(/\.\w*$/, "");
    const new_filename =
      filename?.length > 20 ? filename?.substring(0, 20) : filename;
    return `${new_filename}${extention}`;
  };

  componentDidMount() {
    const { files } = this.props.gist;
    getGistFile(files[Object.keys(files)[0]].raw_url).then((res) =>
      this.setState({ fileContent: res.split("\n") })
    );
  }
  render() {
    const {
      checked,
      gist,
      gist: {
        id,
        owner: { login: username, avatar_url: avatar },
        files,
        created_at,
        description,
      },
      router,
      selectGist,
    } = this.props;
    const { fileContent } = this.state;
    return (
      <Card
        onClick={(e) => {
          router.navigate(`gist-view/${id}`);
        }}
      >
        <CardContent>{<GridFileView fileContent={fileContent} />}</CardContent>
        <div>
          <hr />
        </div>
        <CardFooter>
          <div>
            <UserImage src={avatar} alt="user" />
          </div>
          <div>
            <div>
              <CardInfo>
                <span>{username}</span> /{" "}
                <span>
                  <b>{this.getValidData(Object.keys(files)[0])}</b>
                </span>
              </CardInfo>
              <History>Created {getTimeCreated(created_at)} Ago</History>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default withRouter(GridItem);
