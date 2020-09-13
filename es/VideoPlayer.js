var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  direction: ltr;\n"], ["\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  direction: ltr;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Canvas } from "./atoms/Canvas";
import Bar from "./Bar";
import { createVideo, getPlayEventListener, togglePlay } from "./playingUtilityFunctions";

export var VideoPlayer = styled(function (_ref) {
  var src = _ref.src,
      toggleFullScreen = _ref.toggleFullScreen,
      poster = _ref.poster,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? undefined : _ref$className;

  var _useState = useState(),
      hiddenVideo = _useState[0],
      updateHiddenVideo = _useState[1];

  var _useState2 = useState(null),
      canvasRef = _useState2[0],
      updateCanvasRef = _useState2[1];

  useEffect(function () {
    if (!hiddenVideo || !canvasRef) return;
    var playEventListener = getPlayEventListener(hiddenVideo, canvasRef);
    hiddenVideo.addEventListener("play", playEventListener);
    return function () {
      return hiddenVideo.removeEventListener("play", playEventListener);
    };
  }, [hiddenVideo, canvasRef]);

  useEffect(function () {
    !hiddenVideo && updateHiddenVideo(createVideo(src));
    return function () {
      if (hiddenVideo) {
        hiddenVideo.paused && hiddenVideo.pause();
        hiddenVideo.remove();
      }
    };
  }, [src, hiddenVideo]);

  return React.createElement(
    "div",
    { className: className },
    React.createElement(Canvas, {
      onContextMenu: function onContextMenu(e) {
        return e.preventDefault();
      },
      poster: poster,
      onClick: function onClick() {
        return togglePlay(hiddenVideo);
      },
      ref: updateCanvasRef
    }),
    hiddenVideo && React.createElement(Bar, { video: hiddenVideo, toggleFullScreen: toggleFullScreen })
  );
})(_templateObject);