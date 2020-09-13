import FullscreenIcon from "@material-ui/icons/Fullscreen";
import PauseIcon from "@material-ui/icons/Pause";
import PlayIcon from "@material-ui/icons/PlayArrow";
import MuteIcon from "@material-ui/icons/VolumeMute";
import UnmuteIcon from "@material-ui/icons/VolumeUp";
import styled from "styled-components";

const IconStyle = `
&& {
fill: white;
height: 24px;
width: 24px;
}
`;

export const Pause = styled(PauseIcon)`
  ${IconStyle}
`;
export const Play = styled(PlayIcon)`
  ${IconStyle}
`;
export const Unmute = styled(UnmuteIcon)`
  ${IconStyle}
`;
export const Mute = styled(MuteIcon)`
  ${IconStyle}
`;
export const FullScreen = styled(FullscreenIcon)`
  ${IconStyle}
`;
