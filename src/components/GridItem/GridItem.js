import React, { Component } from "react";
import avatar_one from "assets/images/img_avatar.png";
import {
  Card,
  CardContent,
  CardInfo,
  CardFooter,
  History,
  UserImage,
} from "./GridItem.styles";
import GridFileView from "components/GridFileView/GridFileView";

class GridItem extends Component {
  getValidData = (data) => {
    const extention = data?.match(/\.\w*$/) ?? "";
    const filename = data?.replace(/\.\w*$/, "");
    const new_filename =
      filename?.length > 20 ? filename?.substring(0, 20) : filename;
    return `${new_filename}${extention}`;
  };

  getTimeCreated = (date) => {
    if (date) {
      const today = new Date();
      const created_date = new Date(date);
      const days_diff = today.getDay() - created_date.getDay();
      const month_diff = today.getMonth() - created_date.getMonth();
      const year_diff = today.getFullYear() - created_date.getFullYear();
    }
  };

  render() {
    const {
      checked,
      gist: {
        owner: { login: username, avatar_url: avatar },
        files,
        created_at,
        description,
      },
    } = this.props;

    return (
      <Card>
        <CardContent>
          <GridFileView url={files[Object.keys(files)[0]].raw_url} />
        </CardContent>
        <div>
          <hr />
        </div>
        <CardFooter>
          <div>
            <UserImage src={avatar_one} alt="user" />
          </div>
          <div>
            <div>
              <CardInfo>
                <span>{username}</span> /{" "}
                <span>
                  <b>{this.getValidData(Object.keys(files)[0])}</b>
                </span>
              </CardInfo>
              <History>Created {this.getTimeCreated(created_at)}</History>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default GridItem;
