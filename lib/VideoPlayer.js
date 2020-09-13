"use strict";

exports.__esModule = true;
exports.VideoPlayer = undefined;

var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  direction: ltr;\n"], ["\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  direction: ltr;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Canvas = require("./atoms/Canvas");

var _Bar = require("./Bar");

var _Bar2 = _interopRequireDefault(_Bar);

var _playingUtilityFunctions = require("./playingUtilityFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VideoPlayer = exports.VideoPlayer = (0, _styledComponents2.default)(function (_ref) {
  var src = _ref.src,
      toggleFullScreen = _ref.toggleFullScreen,
      poster = _ref.poster,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? undefined : _ref$className;

  var _useState = (0, _react.useState)(),
      hiddenVideo = _useState[0],
      updateHiddenVideo = _useState[1];

  var _useState2 = (0, _react.useState)(null),
      canvasRef = _useState2[0],
      updateCanvasRef = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!hiddenVideo || !canvasRef) return;
    var playEventListener = (0, _playingUtilityFunctions.getPlayEventListener)(hiddenVideo, canvasRef);
    hiddenVideo.addEventListener("play", playEventListener);
    return function () {
      return hiddenVideo.removeEventListener("play", playEventListener);
    };
  }, [hiddenVideo, canvasRef]);

  (0, _react.useEffect)(function () {
    !hiddenVideo && updateHiddenVideo((0, _playingUtilityFunctions.createVideo)(src));
    return function () {
      if (hiddenVideo) {
        hiddenVideo.paused && hiddenVideo.pause();
        hiddenVideo.remove();
      }
    };
  }, [src, hiddenVideo]);

  return _react2.default.createElement(
    "div",
    { className: className },
    _react2.default.createElement(_Canvas.Canvas, {
      onContextMenu: function onContextMenu(e) {
        return e.preventDefault();
      },
      poster: poster,
      onClick: function onClick() {
        return (0, _playingUtilityFunctions.togglePlay)(hiddenVideo);
      },
      ref: updateCanvasRef
    }),
    hiddenVideo && _react2.default.createElement(_Bar2.default, { video: hiddenVideo, toggleFullScreen: toggleFullScreen })
  );
})(_templateObject);