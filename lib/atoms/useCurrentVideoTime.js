"use strict";

exports.__esModule = true;
exports.useCurrentVideoTime = undefined;

var _react = require("react");

var useCurrentVideoTime = exports.useCurrentVideoTime = function useCurrentVideoTime(video) {
  var _useState = (0, _react.useState)(video.currentTime),
      currentTime = _useState[0],
      updateCurrentTime = _useState[1];

  (0, _react.useEffect)(function () {
    var changeCurrentTime = function changeCurrentTime() {
      return updateCurrentTime(video.currentTime);
    };
    video.addEventListener("timeupdate", changeCurrentTime);
    return function () {
      return video.removeEventListener("timeupdate", changeCurrentTime);
    };
  }, [video]);

  return currentTime;
};