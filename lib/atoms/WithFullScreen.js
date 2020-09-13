"use strict";

exports.__esModule = true;
exports.VideoPlayerWithFullScreen = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _core = require("@material-ui/core");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _VideoPlayer = require("../VideoPlayer");

var _withReversePortal = require("./withReversePortal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoPlayerWithReversePortal = (0, _withReversePortal.withReversePortal)(_VideoPlayer.VideoPlayer);

var VideoPlayerWithFullScreen = exports.VideoPlayerWithFullScreen = function VideoPlayerWithFullScreen(_ref) {
  var _ref$fullScreen = _ref.fullScreen,
      fullScreen = _ref$fullScreen === undefined ? false : _ref$fullScreen,
      src = _ref.src,
      poster = _ref.poster;

  var _useState = (0, _react.useState)(fullScreen),
      fullScreenOn = _useState[0],
      toggleFullScreen = _useState[1];

  return _react2.default.createElement(VideoPlayerWithReversePortal, _extends({
    isDefaultState: !fullScreenOn,
    NonDefaultStateComp: function NonDefaultStateComp(_ref2) {
      var children = _ref2.children;
      return _react2.default.createElement(
        _core.Dialog,
        { fullScreen: true, open: true },
        children
      );
    }
  }, { poster: poster, src: src, toggleFullScreen: toggleFullScreen }));
};