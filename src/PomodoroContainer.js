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
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
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

  sessionDecrement() {
    if (this.state.sessionLength > 0) {
      this.setState({
        sessionLength: this.state.sessionLength - 1
      });
    }
  }

  sessionIncrement() {
    this.setState({
      sessionLength: this.state.sessionLength + 1
    });
  }


  render() {

    const passDownProps = {
      state: this.state,
      reset: this.reset,
      breakIncrement: this.breakIncrement,
      breakDecrement: this.breakDecrement,
      sessionIncrement: this.sessionIncrement,
      sessionDecrement: this.sessionDecrement
    };

    return <Pomodoro obj={passDownProps} />
  }
}

export default PomodoroContainer;