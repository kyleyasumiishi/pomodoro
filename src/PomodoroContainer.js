import React, { Component } from "react";
import Pomodoro from "./Pomodoro";

class PomodoroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 90000,
      running: false,
      started: false
    }
    this.reset = this.reset.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.timer = this.timer.bind(this);
    this.startStop = this.startStop.bind(this);
  }

  reset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
      started: false
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
    if (this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }

  sessionDecrement() {
    if (this.state.sessionLength > 0) {
      this.setState({
        sessionLength: this.state.sessionLength - 1
      });
    }
  }

  sessionIncrement() {
    if (this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1
      });
    }
  }

  timer() {
    if (this.state.timeLeft > 0) {
        this.setState({
          timeLeft: this.state.timeLeft - 1
        });
      }
  }

  startStop() {
    if (!this.state.started) {
      this.setState({
        timeLeft: this.state.sessionLength * 60 * 60,
        started: true
      });
    } 
    if (this.state.running) {
      this.setState({
        running: false
      });
      clearInterval(this.timer);
    } else {
      this.setState({
        running: true
      });
      setInterval(this.timer, 100);
    }
  }

  render() {

    const passDownProps = {
      state: this.state,
      reset: this.reset,
      breakIncrement: this.breakIncrement,
      breakDecrement: this.breakDecrement,
      sessionIncrement: this.sessionIncrement,
      sessionDecrement: this.sessionDecrement,
      startStop: this.startStop
    };

    return <Pomodoro obj={passDownProps} />
  }
}

export default PomodoroContainer;