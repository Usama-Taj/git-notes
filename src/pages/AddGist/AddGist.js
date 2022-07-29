import { withAuth } from "hoc/withAuth";
import { withRouter } from "hoc/withRouter";
import React, { Component } from "react";
import { AddGistForm } from "./AddGist.styles";
class AddGist extends Component {
  render() {
    return (
      <AddGistForm>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter Gist Description..."
        />
        <input
          type="text"
          name="file_name"
          id="file_name"
          placeholder="Enter file name..."
        />
        <textarea
          name="file_content"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter File Content..."
        ></textarea>
        <button>Add File</button>
        <button>Create Gist</button>
      </AddGistForm>
    );
  }
}

export default withRouter(withAuth(AddGist));
