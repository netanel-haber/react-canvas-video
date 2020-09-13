var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { Dialog } from "@material-ui/core";
import React, { useState } from "react";

import { VideoPlayer } from "./VideoPlayer";
import { withReversePortal } from "./atoms/withReversePortal";

var VideoPlayerWithReversePortal = withReversePortal(VideoPlayer);

export default VideoPlayerWithFullScreen = function VideoPlayerWithFullScreen(_ref) {
  var _ref$fullScreen = _ref.fullScreen,
      fullScreen = _ref$fullScreen === undefined ? false : _ref$fullScreen,
      src = _ref.src,
      poster = _ref.poster;

  var _useState = useState(fullScreen),
      fullScreenOn = _useState[0],
      toggleFullScreen = _useState[1];

  return React.createElement(VideoPlayerWithReversePortal, _extends({
    isDefaultState: !fullScreenOn,
    NonDefaultStateComp: function NonDefaultStateComp(_ref2) {
      var children = _ref2.children;
      return React.createElement(
        Dialog,
        { fullScreen: true, open: true },
        children
      );
    }
  }, { poster: poster, src: src, toggleFullScreen: toggleFullScreen }));
};