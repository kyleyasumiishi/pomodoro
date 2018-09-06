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
            <div id="break-decrement"><FaArrowDown /></div>
            <div id="break-length">5</div>
            <div id="break-increment"><FaArrowUp /></div>
          </div>
        </div>
        
        <div>
          <h2 id="session-label">Session Length</h2>
          <div>
            <div id="session-decrement"><FaArrowDown /></div>
            <div id="session-length">25</div>
            <div id="session-increment"><FaArrowUp /></div>
          </div>
        </div>

      </div>

      <div>
        <h2 id="timer-label">Session</h2>
        <div id="time-left">mm:ss</div>
      </div>

      <div>
        <div id="start_stop"><FaPlay /></div>
        <div id="reset"><FaSync /></div>
      </div>

    </div>
  )
}

export default Pomodoro;