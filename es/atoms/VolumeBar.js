var _templateObject = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: calc(30% - ", ");\n  min-width: 50px;\n  max-width: 150px;\n  cursor: pointer;\n  margin: 0 20px 0 10px;\n"], ["\n  height: ", ";\n  width: calc(30% - ", ");\n  min-width: 50px;\n  max-width: 150px;\n  cursor: pointer;\n  margin: 0 20px 0 10px;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { useState } from "react";
import styled from "styled-components";

import { BAR_HEIGHT } from "../consts";

var VolumeBar = function VolumeBar(_ref) {
  var video = _ref.video;

  var _useState = useState(video.volume || 0),
      volume = _useState[0],
      updateVolume = _useState[1];

  return React.createElement(Progress, {
    onClick: function onClick(e) {
      var percent = e.nativeEvent.offsetX / e.target.offsetWidth;
      video.volume = percent;
      updateVolume(percent);
    },
    min: "0",
    max: "1",
    value: volume
  });
};

var Progress = styled.progress(_templateObject, BAR_HEIGHT, BAR_HEIGHT);

export default VolumeBar;