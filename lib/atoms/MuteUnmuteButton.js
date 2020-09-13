"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  background-color: inherit;\n  cursor: pointer;\n  margin: 0 0 0 10px;\n"], ["\n  ", "\n  background-color: inherit;\n  cursor: pointer;\n  margin: 0 0 0 10px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require("../consts");

var _icons = require("./icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MuteUnmuteButton = function MuteUnmuteButton(_ref) {
  var video = _ref.video;

  var _useState = (0, _react.useState)(video.muted),
      muted = _useState[0],
      toggleMuted = _useState[1];

  return _react2.default.createElement(
    Button,
    {
      onClick: function onClick() {
        video.muted = !video.muted;
        toggleMuted(video.muted);
      }
    },
    muted ? _react2.default.createElement(_icons.Unmute, null) : _react2.default.createElement(_icons.Mute, null)
  );
};

var Button = _styledComponents2.default.div(_templateObject, _consts.flexCenter);

exports.default = MuteUnmuteButton;
module.exports = exports["default"];