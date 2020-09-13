"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  color: white;\n"], ["\n  ", "\n  color: white;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require("../consts");

var _useCurrentVideoTime = require("./useCurrentVideoTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TimeCounter = function TimeCounter(_ref) {
  var video = _ref.video;

  var currentTime = (0, _useCurrentVideoTime.useCurrentVideoTime)(video);
  return _react2.default.createElement(
    TimeCounterContainer,
    null,
    _react2.default.createElement(
      "span",
      null,
      secondsToMinutesSeconds(currentTime),
      "/",
      secondsToMinutesSeconds(video.duration)
    )
  );
};

var TimeCounterContainer = _styledComponents2.default.div(_templateObject, _consts.flexCenter);

var secondsToMinutesSeconds = function secondsToMinutesSeconds(seconds) {
  seconds = Number(seconds);
  if (!seconds) return "00:00";

  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 3600 % 60);

  return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
};

exports.default = TimeCounter;
module.exports = exports["default"];