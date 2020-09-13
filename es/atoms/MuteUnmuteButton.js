var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  background-color: inherit;\n  cursor: pointer;\n  margin: 0 0 0 10px;\n"], ["\n  ", "\n  background-color: inherit;\n  cursor: pointer;\n  margin: 0 0 0 10px;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { useState } from "react";
import styled from "styled-components";

import { flexCenter } from "../consts";
import { Mute, Unmute } from "./icons";

var MuteUnmuteButton = function MuteUnmuteButton(_ref) {
  var video = _ref.video;

  var _useState = useState(video.muted),
      muted = _useState[0],
      toggleMuted = _useState[1];

  return React.createElement(
    Button,
    {
      onClick: function onClick() {
        video.muted = !video.muted;
        toggleMuted(video.muted);
      }
    },
    muted ? React.createElement(Unmute, null) : React.createElement(Mute, null)
  );
};

var Button = styled.div(_templateObject, flexCenter);

export default MuteUnmuteButton;