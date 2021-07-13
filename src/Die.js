import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    const num = `fas fa-dice-${this.props.num} fa-10x`;

    return <i className={num}></i>;
  }
}

export default Die;
