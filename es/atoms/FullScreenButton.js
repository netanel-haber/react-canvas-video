var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  cursor: pointer;\n  margin: 0 10px;\n"], ["\n  ", "\n  cursor: pointer;\n  margin: 0 10px;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

import { flexCenter } from "../consts";
import { FullScreen } from "./icons";

export var FullScreenButton = function FullScreenButton(_ref) {
  var toggleFullScreen = _ref.toggleFullScreen;
  return React.createElement(
    Button,
    { onClick: function onClick() {
        return toggleFullScreen(function (fs) {
          return !fs;
        });
      } },
    React.createElement(FullScreen, null)
  );
};

var Button = styled.div(_templateObject, flexCenter);