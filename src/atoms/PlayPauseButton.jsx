import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { flexCenter } from "../consts";
import { Pause, Play } from "./icons";

const PlayPauseButton = ({ video }) => {
  const [paused, togglePaused] = useState(video.paused);

  useEffect(() => {
    const setPlaying = () => togglePaused(false);
    const setPaused = () => togglePaused(true);
    video.addEventListener("play", setPlaying);
    video.addEventListener("pause", setPaused);
    return () => {
      video.removeEventListener("play", setPlaying);
      video.removeEventListener("pause", setPaused);
    };
  }, [video]);

  return (
    <Button
      onClick={() => {
        video.paused ? video.play() : video.pause();
        togglePaused(video.paused);
      }}
    >
      {paused ? <Play /> : <Pause />}
    </Button>
  );
};

const Button = styled.div`
  ${flexCenter}
  background-color: inherit;
  cursor: pointer;
  margin: 0 15px;
`;

export default PlayPauseButton;
