"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  width: calc(100% - ", ");\n  margin: 0 20px;\n  height: ", ";\n  cursor: pointer;\n"], ["\n  width: calc(100% - ", ");\n  margin: 0 20px;\n  height: ", ";\n  cursor: pointer;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require("../consts");

var _useCurrentVideoTime = require("./useCurrentVideoTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ProgressBar = function ProgressBar(_ref) {
  var video = _ref.video;

  var currentTime = (0, _useCurrentVideoTime.useCurrentVideoTime)(video);

  return _react2.default.createElement(Progress, {
    onClick: function onClick(e) {
      return seek(e, video);
    },
    min: "0",
    max: "100",
    value: currentTime ? currentTime / video.duration * 100 : 0
  });
};

var Progress = _styledComponents2.default.progress(_templateObject, _consts.BAR_HEIGHT, _consts.BAR_HEIGHT);

var seek = function seek(e, video) {
  var percent = e.nativeEvent.offsetX / e.target.offsetWidth;
  video.currentTime = percent * video.duration;
  if (video.paused || video.ended) {
    video.play().then(video.pause);
  }
};

exports.default = ProgressBar;
module.exports = exports["default"];