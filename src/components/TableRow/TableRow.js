import React, { Component } from "react";
import {
  TableCell,
  UserColumn,
  UserImage,
  ColumnControls,
} from "./TableRow.styles";
import { getTimeFromDate, getvalidDateDMMMY } from "utilities/utilityFunctions";
class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  getValidData = (data) => {
    const extention = data?.match(/\.\w*$/) ?? "";
    const filename = data?.replace(/\.\w*$/, "");
    const new_filename =
      filename?.length > 20 ? filename?.substring(0, 20) : filename;
    return `${new_filename}${extention}`;
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
      <tr>
        <TableCell>
          <input type="checkbox" checked={checked} readOnly />
        </TableCell>
        <UserColumn>
          <div>
            <UserImage src={avatar} alt="user" />
          </div>
          <div>{username}</div>
        </UserColumn>
        <TableCell>{getvalidDateDMMMY(created_at)}</TableCell>
        <TableCell>{getTimeFromDate(created_at)}</TableCell>
        <TableCell>{this.getValidData(description)}</TableCell>
        <TableCell>{this.getValidData(Object.keys(files)[0])}</TableCell>
        <ColumnControls>
          <div className="d-flex justify-content-around">
            <div>
              <i className="fa-regular fa-star"></i>
            </div>
            <div>
              <i className="fa-solid fa-code-branch"></i>
            </div>
          </div>
        </ColumnControls>
      </tr>
    );
  }
}

export default TableRow;
