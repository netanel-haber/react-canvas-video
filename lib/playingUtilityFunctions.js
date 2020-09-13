"use strict";

exports.__esModule = true;
exports.getPlayEventListener = getPlayEventListener;
exports.createVideo = createVideo;
exports.togglePlay = togglePlay;

var _consts = require("./consts");

function getPlayEventListener(video, canvas) {
  var clientWidth = canvas.clientWidth;

  canvas.width = clientWidth;
  canvas.height = clientWidth / _consts.RATIO;
  var context = canvas.getContext("2d");
  return function () {
    return requestVideoToBeAnimatedToCanvas({ video: video, context: context, canvas: canvas });
  };
}

function createVideo(src) {
  var video = document.createElement("video");
  var source = document.createElement("source");
  source.setAttribute("src", src);
  video.appendChild(source);
  return video;
}

function requestVideoToBeAnimatedToCanvas(_ref) {
  var video = _ref.video,
      context = _ref.context,
      canvas = _ref.canvas;

  if (!context) return;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  if (video.paused || video.ended) return;
  requestAnimationFrame(function () {
    return requestVideoToBeAnimatedToCanvas({ video: video, context: context, canvas: canvas });
  });
}

function togglePlay(video) {
  if (video) video.paused ? video.play() : video.pause();
}