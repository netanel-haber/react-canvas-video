var _templateObject = _taggedTemplateLiteralLoose(["\nwidth: 100%;\n", "\nmax-height: calc(100vh - ", " - 1px);\nbackground-color: black;\nbackground-size: cover;\nbackground-position: center center;\nbackground-repeat: no-repeat;\ncursor: pointer;\n"], ["\nwidth: 100%;\n", "\nmax-height: calc(100vh - ", " - 1px);\nbackground-color: black;\nbackground-size: cover;\nbackground-position: center center;\nbackground-repeat: no-repeat;\ncursor: pointer;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from "styled-components";

import { BAR_HEIGHT } from "../consts";

export var Canvas = styled.canvas(_templateObject, function (_ref) {
  var poster = _ref.poster;
  return "background-image: url(" + poster + ");";
}, BAR_HEIGHT);