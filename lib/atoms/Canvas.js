"use strict";

exports.__esModule = true;
exports.Canvas = undefined;

var _templateObject = _taggedTemplateLiteralLoose(["\nwidth: 100%;\n", "\nmax-height: calc(100vh - ", " - 1px);\nbackground-color: black;\nbackground-size: cover;\nbackground-position: center center;\nbackground-repeat: no-repeat;\ncursor: pointer;\n"], ["\nwidth: 100%;\n", "\nmax-height: calc(100vh - ", " - 1px);\nbackground-color: black;\nbackground-size: cover;\nbackground-position: center center;\nbackground-repeat: no-repeat;\ncursor: pointer;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require("../consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Canvas = exports.Canvas = _styledComponents2.default.canvas(_templateObject, function (_ref) {
  var poster = _ref.poster;
  return "background-image: url(" + poster + ");";
}, _consts.BAR_HEIGHT);