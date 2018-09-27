import React, { Component } from "react";
import Pomodoro from "./Pomodoro";

class PomodoroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 150000,
      sessionDisplay: "25:00",
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
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 150000,
      started: false,
      sessionDisplay: "25:00"
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
    if (this.state.timeLeft > 0 && this.state.running) {
        const newTimeLeft = this.state.timeLeft - 100;
        this.setState({
          timeLeft: newTimeLeft,
          sessionDisplay: this.format(newTimeLeft)
        });
        console.log(this.format(this.state.timeLeft));
      }
  }

  startStop() {
    if (!this.state.started) {
      this.setState({
        timeLeft: this.state.sessionLength * 60 * 100,
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
      sessionDisplay: this.format(this.state.timeLeft)
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