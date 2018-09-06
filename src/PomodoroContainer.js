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
  }

  reset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25
    });
  }

  render() {
    return <Pomodoro state={this.state} reset={this.reset} />
  }
}

export default PomodoroContainer;