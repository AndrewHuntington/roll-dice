import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "six" };
    this.buttonClick = this.buttonClick.bind(this);
    this.NUMBERS = ["one", "two", "three", "four", "five", "six"];
  }

  buttonClick() {
    const randomNumber1 = Math.floor(Math.random() * 6);
    const randomNumber2 = Math.floor(Math.random() * 6);
    this.setState({ die1: this.NUMBERS[randomNumber1] });
    this.setState({ die2: this.NUMBERS[randomNumber2] });
  }

  render() {
    return (
      <div className="RollDice">
        <div className="dice-wrapper">
          <Die num={this.state.die1} />
          <Die num={this.state.die2} />
        </div>

        <div className="button-wrapper">
          <button onClick={this.buttonClick}>Roll Dice!</button>
        </div>
      </div>
    );
  }
}

export default RollDice;
