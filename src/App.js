import AddGist from "pages/AddGist/AddGist";
import GistList from "pages/GistList/GistList";
import GistView from "pages/GistView/GistView";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/gists-grid-view" element={<GistList />} />
        <Route path="/gists-table-view" element={<GistList />} />
        <Route path="/gists-file-view" element={<GistView />} />
        <Route path="/gists-file-view" element={<AddGist />} />
      </Routes>
    </Router>
  );
};

export default App;
