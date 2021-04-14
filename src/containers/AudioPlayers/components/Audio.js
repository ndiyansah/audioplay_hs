import React from "react";

import BarAudio from "../../../components/BarAudio";
import PlayAudio from "../../../components/PlayAudio";
import PauseAudio from "../../../components/PauseAudio";
import useAudioPlayer from "../../../hooks/useAudioPlayer";

const Audio = React.forwardRef(({ src }, ref) => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer();

  return (
    <div>
      <audio id="audio" ref={ref} type="audio/mpeg">
        <source src={src} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div>
        {playing ? (
          <PauseAudio handleClick={() => setPlaying(false)} />
        ) : (
          <PlayAudio handleClick={() => setPlaying(true)} />
        )}
        <BarAudio
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </div>
  );
});

export default Audio;
