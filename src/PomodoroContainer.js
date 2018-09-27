import React, { Component } from "react";
import Pomodoro from "./Pomodoro";
import * as constants from "./constants";

class PomodoroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: constants.BREAK_LENGTH,
      sessionLength: constants.SESSION_LENGTH,
      msLeft: constants.MILLISECONDS_LEFT,
      sessionDisplay: this.format(constants.MILLISECONDS_LEFT),
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
    this.format = this.format.bind(this);
  }

  format(t) {
    const minutes = Math.floor(t / 6000);
    let seconds = Math.floor((t % 6000) / 100);
    seconds = (seconds < 10) ? ("0" + seconds) : seconds;
    return minutes.toString() + ":" + seconds.toString(); 
  }

  reset() {
    this.setState({
      breakLength: constants.BREAK_LENGTH,
      sessionLength: constants.SESSION_LENGTH,
      msLeft: constants.MILLISECONDS_LEFT,
      sessionDisplay: this.format(constants.MILLISECONDS_LEFT),
      started: false,
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
    if (this.state.msLeft > 0 && this.state.running) {
        const newmsLeft = this.state.msLeft - 100;
        this.setState({
          msLeft: newmsLeft,
          sessionDisplay: this.format(newmsLeft)
        });
        console.log(this.format(this.state.msLeft));
      }
  }

  startStop() {
    if (!this.state.started) {
      this.setState({
        msLeft: this.state.sessionLength * 60 * 100,
        started: true
      });
    } 
    if (this.state.running) {
      this.setState({
        running: false
      });
    } else {
      this.setState({
        running: true
      });
      setInterval(this.timer, 1000);
    }
    this.setState({
      sessionDisplay: this.format(this.state.msLeft)
    });
  }

  render() {

    const passDownProps = {
      state: this.state,
      reset: this.reset,
      breakIncrement: this.breakIncrement,
      breakDecrement: this.breakDecrement,
      sessionIncrement: this.sessionIncrement,
      sessionDecrement: this.sessionDecrement,
      startStop: this.startStop,
    };

    return <Pomodoro obj={passDownProps} />
  }
}

export default PomodoroContainer;