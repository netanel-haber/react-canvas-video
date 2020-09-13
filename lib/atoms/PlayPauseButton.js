"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  background-color: inherit;\n  cursor: pointer;\n  margin: 0 15px;\n"], ["\n  ", "\n  background-color: inherit;\n  cursor: pointer;\n  margin: 0 15px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require("../consts");

var _icons = require("./icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PlayPauseButton = function PlayPauseButton(_ref) {
  var video = _ref.video;

  var _useState = (0, _react.useState)(video.paused),
      paused = _useState[0],
      togglePaused = _useState[1];

  (0, _react.useEffect)(function () {
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

  return _react2.default.createElement(
    Button,
    {
      onClick: function onClick() {
        video.paused ? video.play() : video.pause();
        togglePaused(video.paused);
      }
    },
    paused ? _react2.default.createElement(_icons.Play, null) : _react2.default.createElement(_icons.Pause, null)
  );
};

var Button = _styledComponents2.default.div(_templateObject, _consts.flexCenter);

exports.default = PlayPauseButton;
module.exports = exports["default"];