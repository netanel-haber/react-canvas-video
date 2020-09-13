import React from "react";
import styled from "styled-components";

import { BAR_HEIGHT } from "../consts";
import { useCurrentVideoTime } from "./useCurrentVideoTime";

const ProgressBar = ({ video }) => {
  const currentTime = useCurrentVideoTime(video);

  return (
    <Progress
      onClick={(e) => seek(e, video)}
      min="0"
      max="100"
      value={currentTime ? (currentTime / video.duration) * 100 : 0}
    />
  );
};

const Progress = styled.progress`
  width: calc(100% - ${BAR_HEIGHT});
  margin: 0 20px;
  height: ${BAR_HEIGHT};
  cursor: pointer;
`;

const seek = (e, video) => {
  const percent = e.nativeEvent.offsetX / e.target.offsetWidth;
  video.currentTime = percent * video.duration;
  if (video.paused || video.ended) {
    video.play().then(video.pause);
  }
};

export default ProgressBar;
