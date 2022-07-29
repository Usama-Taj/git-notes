import React, { Component } from "react";
import { GridCenter, GridTitle } from "shared-styles/Grid.styles";

class Message extends Component {
  render() {
    const { title, message } = this.props;
    return (
      <GridCenter>
        <GridTitle remSize="4">{title}</GridTitle>
        <GridTitle remSize="2">{message}</GridTitle>
      </GridCenter>
    );
  }
}

export default Message;
