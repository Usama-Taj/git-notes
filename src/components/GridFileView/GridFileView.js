import { getGistFile } from "api/gist.service";
import React, { Component } from "react";
import { Table } from "./GridFileView.styles";

class GridFileView extends Component {
  constructor(props) {
    super(props);
    this.state = { fileContent: [] };
  }
  componentDidMount() {
    const { url } = this.props;
    getGistFile(url)
      .then((res) => res.text())
      .then((res) => this.setState({ fileContent: res.split("\n") }))
      .catch((err) => console.log("Sorry, Cannot Fetch File", err));
  }
  renderFileContent = (fileData) => {
    fileData.splice(10);
    if (Array.isArray(fileData)) {
      return fileData.map((item, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.substring(0, 40)}...</td>
        </tr>
      ));
    }
  };
  render() {
    const { fileContent } = this.state;
    return (
      <Table>
        <tbody>{this.renderFileContent(fileContent)}</tbody>
      </Table>
    );
  }
}

export default GridFileView;
