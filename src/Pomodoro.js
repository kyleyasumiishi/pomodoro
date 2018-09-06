import React from "react";
import { FaArrowDown, FaArrowUp, FaSync, FaPlay } from "react-icons/fa";

const Pomodoro = props => {
  return (
    <div>
      <h1>Pomodoro Clock</h1>
      
      <div id="">

        <div>
          <h2 id="break-label">Break Length</h2>
          <div>
            <div id="break-decrement" onClick={props.obj.breakDecrement}><FaArrowDown /></div>
            <div id="break-length">{props.obj.state.breakLength}</div>
            <div id="break-increment" onClick={props.obj.breakIncrement}><FaArrowUp /></div>
          </div>
        </div>
        
        <div>
          <h2 id="session-label">Session Length</h2>
          <div>
            <div id="session-decrement" onClick={props.obj.sessionDecrement}><FaArrowDown /></div>
            <div id="session-length">{props.obj.state.sessionLength}</div>
            <div id="session-increment" onClick={props.obj.sessionIncrement}><FaArrowUp /></div>
          </div>
        </div>

      </div>

      <div>
        <h2 id="timer-label">Session</h2>
        <div id="time-left">{props.obj.state.timeLeft}</div>
      </div>

      <div>
        <div id="start_stop" onClick={props.obj.startStop}><FaPlay /></div>
        <div id="reset" onClick={props.obj.reset}><FaSync /></div>
      </div>

    </div>
  )
}

export default Pomodoro;