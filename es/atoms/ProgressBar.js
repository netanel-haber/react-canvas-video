var _templateObject = _taggedTemplateLiteralLoose(["\n  width: calc(100% - ", ");\n  margin: 0 20px;\n  height: ", ";\n  cursor: pointer;\n"], ["\n  width: calc(100% - ", ");\n  margin: 0 20px;\n  height: ", ";\n  cursor: pointer;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

import { BAR_HEIGHT } from "../consts";
import { useCurrentVideoTime } from "./useCurrentVideoTime";

var ProgressBar = function ProgressBar(_ref) {
  var video = _ref.video;

  var currentTime = useCurrentVideoTime(video);

  return React.createElement(Progress, {
    onClick: function onClick(e) {
      return seek(e, video);
    },
    min: "0",
    max: "100",
    value: currentTime ? currentTime / video.duration * 100 : 0
  });
};

var Progress = styled.progress(_templateObject, BAR_HEIGHT, BAR_HEIGHT);

var seek = function seek(e, video) {
  var percent = e.nativeEvent.offsetX / e.target.offsetWidth;
  video.currentTime = percent * video.duration;
  if (video.paused || video.ended) {
    video.play().then(video.pause);
  }
};

export default ProgressBar;