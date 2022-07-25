import React, { Component } from "react";
import { PaginationControls, PageInfo } from "./GistListFooter.styles";
class GistListFooter extends Component {
  render() {
    return (
      <footer>
        <PaginationControls>
          <div></div>
          <div>
            <button>Prev</button>
            <button>Next</button>
          </div>
          <PageInfo>Page 1 of 14</PageInfo>
        </PaginationControls>
      </footer>
    );
  }
}

export default GistListFooter;
