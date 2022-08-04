import React from "react";
import { Layout } from "antd";
import HeaderContent from "components/common/header/HeaderContent";
import { BrowserRouter as Router } from "react-router-dom";

const { Header, Content } = Layout;

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
