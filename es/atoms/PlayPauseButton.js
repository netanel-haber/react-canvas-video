var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  background-color: inherit;\n  cursor: pointer;\n  margin: 0 15px;\n"], ["\n  ", "\n  background-color: inherit;\n  cursor: pointer;\n  margin: 0 15px;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { flexCenter } from "../consts";
import { Pause, Play } from "./icons";

var PlayPauseButton = function PlayPauseButton(_ref) {
  var video = _ref.video;

  var _useState = useState(video.paused),
      paused = _useState[0],
      togglePaused = _useState[1];

  useEffect(function () {
    var setPlaying = function setPlaying() {
      return togglePaused(false);
    };
    var setPaused = function setPaused() {
      return togglePaused(true);
    };
    video.addEventListener("play", setPlaying);
    video.addEventListener("pause", setPaused);
    return function () {
      video.removeEventListener("play", setPlaying);
      video.removeEventListener("pause", setPaused);
    };
  }, [video]);

  return React.createElement(
    Button,
    {
      onClick: function onClick() {
        video.paused ? video.play() : video.pause();
        togglePaused(video.paused);
      }
    },
    paused ? React.createElement(Play, null) : React.createElement(Pause, null)
  );
};

var Button = styled.div(_templateObject, flexCenter);

export default PlayPauseButton;