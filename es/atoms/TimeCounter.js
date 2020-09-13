var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  color: white;\n"], ["\n  ", "\n  color: white;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

import { flexCenter } from "../consts";
import { useCurrentVideoTime } from "./useCurrentVideoTime";

var TimeCounter = function TimeCounter(_ref) {
  var video = _ref.video;

  var currentTime = useCurrentVideoTime(video);
  return React.createElement(
    TimeCounterContainer,
    null,
    React.createElement(
      "span",
      null,
      secondsToMinutesSeconds(currentTime),
      "/",
      secondsToMinutesSeconds(video.duration)
    )
  );
};

var TimeCounterContainer = styled.div(_templateObject, flexCenter);

var secondsToMinutesSeconds = function secondsToMinutesSeconds(seconds) {
  seconds = Number(seconds);
  if (!seconds) return "00:00";

  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 3600 % 60);

  return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
};

export default TimeCounter;