import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "six", isRolling: false };
    this.roll = this.roll.bind(this);
    this.NUMBERS = ["one", "two", "three", "four", "five", "six"];
  }

  static defaultProps = {
    NUMBERS: ["one", "two", "three", "four", "five", "six"],
  };

  roll() {
    this.setState({ isRolling: true });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
    const randomNumber1 = Math.floor(Math.random() * 6);
    const randomNumber2 = Math.floor(Math.random() * 6);
    this.setState({ die1: this.NUMBERS[randomNumber1] });
    this.setState({ die2: this.NUMBERS[randomNumber2] });
  }

  render() {
    return (
      <div className="RollDice">
        <div
          className={
            this.state.isRolling
              ? "dice-wrapper animate__animated animate__shakeX"
              : "dice-wrapper"
          }
        >
          <Die num={this.state.die1} />
          <Die num={this.state.die2} />
        </div>

        <div className="button-wrapper">
          <button
            onClick={this.roll}
            disabled={this.state.isRolling ? "disabled" : ""}
          >
            {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
