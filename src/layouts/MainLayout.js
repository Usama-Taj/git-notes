import React from "react";
import { Layout } from "antd";
import HeaderContent from "components/common/header/HeaderContent";
import { BrowserRouter as Router } from "react-router-dom";
import { Content } from "components/GridView/GridView.styles";

const { Header, Contnent } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Router>
      <Header>
        <HeaderContent />
      </Header>
      <Content>{children}</Content>
    </Router>
  );
};

export default MainLayout;
