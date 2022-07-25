import React, { Component } from "react";
import Header from "components/common/header/Header";
import Main from "components/common/main/Main";
import AddGist from "pages/AddGist/AddGist";
import GistList from "pages/GistList/GistList";
import GistView from "pages/GistView/GistView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "pages/Profile/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<GistList />} />
            <Route path="/gist-list" element={<GistList />} />
            <Route path="/gist-view" element={<GistView />} />
            <Route path="/add-gist" element={<AddGist />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Main>
      </Router>
    );
  }
}

export default App;
