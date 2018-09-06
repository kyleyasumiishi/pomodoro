import React, { Component } from "react";
import Pomodoro from "./Pomodoro";

class PomodoroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25
    }
    this.reset = this.reset.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
  }

  reset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25
    });
  }

  breakDecrement() {
    if (this.state.breakLength > 0) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }

  breakIncrement() {
    this.setState({
      breakLength: this.state.breakLength + 1
    });
  }

  render() {
    return <Pomodoro state={this.state} reset={this.reset} breakIncrement={this.breakIncrement} breakDecrement={this.breakDecrement} />
  }
}

export default PomodoroContainer;