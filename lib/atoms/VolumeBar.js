"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: calc(30% - ", ");\n  min-width: 50px;\n  max-width: 150px;\n  cursor: pointer;\n  margin: 0 20px 0 10px;\n"], ["\n  height: ", ";\n  width: calc(30% - ", ");\n  min-width: 50px;\n  max-width: 150px;\n  cursor: pointer;\n  margin: 0 20px 0 10px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require("../consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VolumeBar = function VolumeBar(_ref) {
  var video = _ref.video;

  var _useState = (0, _react.useState)(video.volume || 0),
      volume = _useState[0],
      updateVolume = _useState[1];

  return _react2.default.createElement(Progress, {
    onClick: function onClick(e) {
      var percent = e.nativeEvent.offsetX / e.target.offsetWidth;
      video.volume = percent;
      updateVolume(percent);
    },
    min: "0",
    max: "1",
    value: volume
  });
};

var Progress = _styledComponents2.default.progress(_templateObject, _consts.BAR_HEIGHT, _consts.BAR_HEIGHT);

exports.default = VolumeBar;
module.exports = exports["default"];