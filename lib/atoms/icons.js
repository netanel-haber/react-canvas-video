"use strict";

exports.__esModule = true;
exports.FullScreen = exports.Mute = exports.Unmute = exports.Play = exports.Pause = undefined;

var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n"], ["\n  ", "\n"]);

var _Fullscreen = require("@material-ui/icons/Fullscreen");

var _Fullscreen2 = _interopRequireDefault(_Fullscreen);

var _Pause = require("@material-ui/icons/Pause");

var _Pause2 = _interopRequireDefault(_Pause);

var _PlayArrow = require("@material-ui/icons/PlayArrow");

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _VolumeMute = require("@material-ui/icons/VolumeMute");

var _VolumeMute2 = _interopRequireDefault(_VolumeMute);

var _VolumeUp = require("@material-ui/icons/VolumeUp");

var _VolumeUp2 = _interopRequireDefault(_VolumeUp);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var IconStyle = "\n&& {\nfill: white;\nheight: 24px;\nwidth: 24px;\n}\n";

var Pause = exports.Pause = (0, _styledComponents2.default)(_Pause2.default)(_templateObject, IconStyle);
var Play = exports.Play = (0, _styledComponents2.default)(_PlayArrow2.default)(_templateObject, IconStyle);
var Unmute = exports.Unmute = (0, _styledComponents2.default)(_VolumeUp2.default)(_templateObject, IconStyle);
var Mute = exports.Mute = (0, _styledComponents2.default)(_VolumeMute2.default)(_templateObject, IconStyle);
var FullScreen = exports.FullScreen = (0, _styledComponents2.default)(_Fullscreen2.default)(_templateObject, IconStyle);