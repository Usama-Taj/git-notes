import React, { Component } from "react";
import GistListHeader from "components/GistListHeader/GistListHeader";
import GistListFooter from "components/GistListFooter/GistListFooter";
import TableView from "components/TableView/TableView";
import GridView from "components/GridView/GridView";
import { StyledGistList } from "./GistList.styles";
import { listPublicGists } from "api/gist.service";

class GistList extends Component {
  constructor(props) {
    super(props);
    this.state = { grid_view: false, gists: [] };
  }
  setGridViewType = (grid_view) => {
    this.setState({ grid_view });
  };
  componentDidMount() {
    listPublicGists()
      .then((res) => res.json())
      .then((res) => this.setState({ gists: res }))
      .catch((err) => console.log(err));
  }
  renderGists = () => {
    const { gists, grid_view } = this.state;
    if (gists.length > 0) {
      if (grid_view) {
        return <GridView gists={gists} />;
      } else {
        return <TableView gists={gists} />;
      }
    }
  };
  render() {
    return (
      <StyledGistList>
        <GistListHeader
          setGridViewType={this.setGridViewType}
          grid_view={this.state.grid_view}
        />
        {this.renderGists()}
        {/** Grid Or Table Content Here */}
        <GistListFooter />
      </StyledGistList>
    );
  }
}

export default GistList;
