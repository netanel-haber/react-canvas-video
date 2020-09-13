var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  background-color: black;\n  width: 100%;\n  height: ", ";\n"], ["\n  display: flex;\n  background-color: black;\n  width: 100%;\n  height: ", ";\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

import { FullScreenButton } from "./atoms/FullScreenButton";
import MuteUnmuteButton from "./atoms/MuteUnmuteButton";
import PlayPauseBtn from "./atoms/PlayPauseButton";
import ProgressBar from "./atoms/ProgressBar";
import TimeCounter from "./atoms/TimeCounter";
import VolumeBar from "./atoms/VolumeBar";
import { BAR_HEIGHT } from "./consts";

var Bar = function Bar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? undefined : _ref$className,
      video = _ref.video,
      toggleFullScreen = _ref.toggleFullScreen;

  return React.createElement(
    "div",
    { className: className },
    React.createElement(PlayPauseBtn, { video: video }),
    React.createElement(TimeCounter, { video: video }),
    React.createElement(ProgressBar, { video: video }),
    React.createElement(MuteUnmuteButton, { video: video }),
    React.createElement(VolumeBar, { video: video }),
    toggleFullScreen && React.createElement(FullScreenButton, { toggleFullScreen: toggleFullScreen })
  );
};

var StyledBar = styled(Bar)(_templateObject, BAR_HEIGHT);

export default StyledBar;