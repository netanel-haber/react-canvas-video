import React from "react";
import styled from "styled-components";

import { flexCenter } from "../consts";
import { useCurrentVideoTime } from "./useCurrentVideoTime";

const TimeCounter = ({ video }) => {
  const currentTime = useCurrentVideoTime(video);
  return (
    <TimeCounterContainer>
      <span>
        {secondsToMinutesSeconds(currentTime)}/
        {secondsToMinutesSeconds(video.duration)}
      </span>
    </TimeCounterContainer>
  );
};

const TimeCounterContainer = styled.div`
  ${flexCenter}
  color: white;
`;

const secondsToMinutesSeconds = (seconds) => {
  seconds = Number(seconds);
  if (!seconds) return "00:00";

  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
};

export default TimeCounter;
