import Header from "components/common/header/Header";
import Main from "components/common/main/Main";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class MainLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Router>
        <Header />
        <Main>{children}</Main>
      </Router>
    );
  }
}

export default MainLayout;
