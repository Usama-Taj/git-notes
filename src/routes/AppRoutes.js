import AddGist from "pages/AddGist/AddGist";
import GistList from "pages/GistList/GistList";
import GistView from "pages/GistView/GistView";
import Profile from "pages/Profile/Profile";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

class AppRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<GistList />} />
        <Route path="/gist-list" element={<GistList />} />
        <Route path="/gist-view" element={<GistView />} />
        <Route path="/add-gist" element={<AddGist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    );
  }
}

export default AppRoutes;
