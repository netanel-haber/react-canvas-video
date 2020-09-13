var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n"], ["\n  ", "\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import FullscreenIcon from "@material-ui/icons/Fullscreen";
import PauseIcon from "@material-ui/icons/Pause";
import PlayIcon from "@material-ui/icons/PlayArrow";
import MuteIcon from "@material-ui/icons/VolumeMute";
import UnmuteIcon from "@material-ui/icons/VolumeUp";
import styled from "styled-components";

var IconStyle = "\n&& {\nfill: white;\nheight: 24px;\nwidth: 24px;\n}\n";

export var Pause = styled(PauseIcon)(_templateObject, IconStyle);
export var Play = styled(PlayIcon)(_templateObject, IconStyle);
export var Unmute = styled(UnmuteIcon)(_templateObject, IconStyle);
export var Mute = styled(MuteIcon)(_templateObject, IconStyle);
export var FullScreen = styled(FullscreenIcon)(_templateObject, IconStyle);