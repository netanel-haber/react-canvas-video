"use strict";

exports.__esModule = true;
exports.FullScreenButton = undefined;

var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  cursor: pointer;\n  margin: 0 10px;\n"], ["\n  ", "\n  cursor: pointer;\n  margin: 0 10px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require("../consts");

var _icons = require("./icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FullScreenButton = exports.FullScreenButton = function FullScreenButton(_ref) {
  var toggleFullScreen = _ref.toggleFullScreen;
  return _react2.default.createElement(
    Button,
    { onClick: function onClick() {
        return toggleFullScreen(function (fs) {
          return !fs;
        });
      } },
    _react2.default.createElement(_icons.FullScreen, null)
  );
};

var Button = _styledComponents2.default.div(_templateObject, _consts.flexCenter);