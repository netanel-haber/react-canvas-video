import React from "react";
import styled from "styled-components";

import { FullScreenButton } from "./atoms/FullScreenButton";
import MuteUnmuteButton from "./atoms/MuteUnmuteButton";
import PlayPauseBtn from "./atoms/PlayPauseButton";
import ProgressBar from "./atoms/ProgressBar";
import TimeCounter from "./atoms/TimeCounter";
import VolumeBar from "./atoms/VolumeBar";
import { BAR_HEIGHT } from "./consts";
import { BarProps } from "./types";

const Bar = ({
  className = undefined,
  video,
  toggleFullScreen,
}: BarProps): JSX.Element => {
  return (
    <div className={className}>
      <PlayPauseBtn video={video} />
      <TimeCounter video={video} />
      <ProgressBar video={video} />
      <MuteUnmuteButton video={video} />
      <VolumeBar video={video} />
      {toggleFullScreen && (
        <FullScreenButton toggleFullScreen={toggleFullScreen} />
      )}
    </div>
  );
};

const StyledBar = styled(Bar)`
  display: flex;
  background-color: black;
  width: 100%;
  height: ${BAR_HEIGHT};
`;

export default StyledBar;
