import React from "react";
import Icon from '../Icon';
import { PlayButton } from "../../theme/MainStyle/Audio";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <PlayButton onClick={() => handleClick()}>
       <Icon name="play-circle" fill="#1DD760" size={38}/>
    </PlayButton>
  );
}
