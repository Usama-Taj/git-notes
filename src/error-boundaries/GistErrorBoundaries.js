import React, { Component } from "react";
import { GridTitle, GridCenter } from "shared-styles/Grid.styles";

class GistErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log("error");
  }
  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <GridCenter>
          <GridTitle>404</GridTitle>
          <GridTitle>Ooops! Gist Not Found</GridTitle>
        </GridCenter>
      );
    }
    return children;
  }
}

export default GistErrorBoundaries;
