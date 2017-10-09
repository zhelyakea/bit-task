import React, { Component } from "react";

export default class ColContainer extends Component {
  render() {
    return <div className="col_container">{this.props.children}</div>;
  }
}
