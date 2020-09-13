import React, { useState } from "react";
import styled from "styled-components";

import { BAR_HEIGHT } from "../consts";

const VolumeBar = ({ video }) => {
  const [volume, updateVolume] = useState(video.volume || 0);
  return (
    <Progress
      onClick={(e) => {
        const percent = e.nativeEvent.offsetX / e.target.offsetWidth;
        video.volume = percent;
        updateVolume(percent);
      }}
      min="0"
      max="1"
      value={volume}
    />
  );
};

const Progress = styled.progress`
  height: ${BAR_HEIGHT};
  width: calc(30% - ${BAR_HEIGHT});
  min-width: 50px;
  max-width: 150px;
  cursor: pointer;
  margin: 0 20px 0 10px;
`;

export default VolumeBar;
