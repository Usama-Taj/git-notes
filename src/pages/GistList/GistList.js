import React, { Component } from "react";
import { connect } from "react-redux";
import GistListHeader from "components/GistListHeader/GistListHeader";
import GistListFooter from "components/GistListFooter/GistListFooter";
import TableView from "components/TableView/TableView";
import GridView from "components/GridView/GridView";
import { StyledGistList } from "./GistList.styles";
import { getPublicGists } from "api/gist.service";
import { GET_GIST_LIST } from "redux-state/actionTypes";
import { fetchGistList } from "redux-state/gists";
import { Route } from "react-router-dom";

class GistList extends Component {
  constructor(props) {
    super(props);
    this.state = { grid_view: false, gists: [] };
    this.STARTING_PAGE = 1;
  }
  setGridViewType = (grid_view) => {
    this.setState({ grid_view });
  };
  componentDidMount() {
    const { getList, gists_list } = this.props;
    getList(this.STARTING_PAGE);
  }
  renderGists = () => {
    const { gists_list } = this.props;
    const { grid_view } = this.state;
    if (gists_list?.length > 0) {
      if (grid_view) {
        return <GridView gists={gists_list} />;
      } else {
        return <TableView gists={gists_list} />;
      }
    }
  };
  render() {
    return (
      <>
        <StyledGistList>
          <GistListHeader
            setGridViewType={this.setGridViewType}
            grid_view={this.state.grid_view}
          />
          {this.renderGists()}
          {/** Grid Or Table Content Here */}
          <GistListFooter />
        </StyledGistList>
      </>
    );
  }
}
const mapDispatchToProps = {
  getList: fetchGistList,
};
const mapStateToProps = (state) => {
  const {
    gists: { gists_list },
  } = state;
  return { gists_list };
};
export default connect(mapStateToProps, mapDispatchToProps)(GistList);
