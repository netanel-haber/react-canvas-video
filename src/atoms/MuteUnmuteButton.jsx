import React, { useState } from "react";
import styled from "styled-components";

import { flexCenter } from "../consts";
import { Mute, Unmute } from "./icons";

const MuteUnmuteButton = ({ video }) => {
  const [muted, toggleMuted] = useState(video.muted);
  return (
    <Button
      onClick={() => {
        video.muted = !video.muted;
        toggleMuted(video.muted);
      }}
    >
      {muted ? <Unmute /> : <Mute />}
    </Button>
  );
};

const Button = styled.div`
  ${flexCenter}
  background-color: inherit;
  cursor: pointer;
  margin: 0 0 0 10px;
`;

export default MuteUnmuteButton;
