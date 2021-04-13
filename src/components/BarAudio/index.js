import React from "react";
import moment from "moment";

import { Bar } from "../../theme/MainStyle/Audio";


export default function BarAudio(props) {
  const { duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  const formatDuration = (duration) => {
    const durations = moment.duration(duration, "seconds");
    return moment.utc(durations.asMilliseconds()).format("mm:ss", { trim : false});
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".barProgress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <Bar>
      <span className="barTime">{formatDuration(curTime)}</span>
      <div
        className="barProgress"
        style={{
          background: `linear-gradient(to right, #1DD760 ${curPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className="barProgressKnob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="barTime">{formatDuration(duration)}</span>
    </Bar>
  );
}
