import React, { Component } from "react";
import GistContent from "components/GistContent/GistContent";
import GistHeader from "components/GistHeader/GistHeader";
import { Gist } from "./GistView.styles";

class GistView extends Component {
  render() {
    return (
      <Gist>
        <GistHeader />
        <GistContent />
      </Gist>
    );
  }
}

export default GistView;
