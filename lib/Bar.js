"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  background-color: black;\n  width: 100%;\n  height: ", ";\n"], ["\n  display: flex;\n  background-color: black;\n  width: 100%;\n  height: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FullScreenButton = require("./atoms/FullScreenButton");

var _MuteUnmuteButton = require("./atoms/MuteUnmuteButton");

var _MuteUnmuteButton2 = _interopRequireDefault(_MuteUnmuteButton);

var _PlayPauseButton = require("./atoms/PlayPauseButton");

var _PlayPauseButton2 = _interopRequireDefault(_PlayPauseButton);

var _ProgressBar = require("./atoms/ProgressBar");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _TimeCounter = require("./atoms/TimeCounter");

var _TimeCounter2 = _interopRequireDefault(_TimeCounter);

var _VolumeBar = require("./atoms/VolumeBar");

var _VolumeBar2 = _interopRequireDefault(_VolumeBar);

var _consts = require("./consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Bar = function Bar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? undefined : _ref$className,
      video = _ref.video,
      toggleFullScreen = _ref.toggleFullScreen;

  return _react2.default.createElement(
    "div",
    { className: className },
    _react2.default.createElement(_PlayPauseButton2.default, { video: video }),
    _react2.default.createElement(_TimeCounter2.default, { video: video }),
    _react2.default.createElement(_ProgressBar2.default, { video: video }),
    _react2.default.createElement(_MuteUnmuteButton2.default, { video: video }),
    _react2.default.createElement(_VolumeBar2.default, { video: video }),
    toggleFullScreen && _react2.default.createElement(_FullScreenButton.FullScreenButton, { toggleFullScreen: toggleFullScreen })
  );
};

var StyledBar = (0, _styledComponents2.default)(Bar)(_templateObject, _consts.BAR_HEIGHT);

exports.default = StyledBar;
module.exports = exports["default"];