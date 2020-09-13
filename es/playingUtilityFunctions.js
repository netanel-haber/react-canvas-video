import { RATIO } from "./consts";
import { PlayEventHandler, TickArgsObject } from "./types";

export function getPlayEventListener(video, canvas) {
  var clientWidth = canvas.clientWidth;

  canvas.width = clientWidth;
  canvas.height = clientWidth / RATIO;
  var context = canvas.getContext("2d");
  return function () {
    return requestVideoToBeAnimatedToCanvas({ video: video, context: context, canvas: canvas });
  };
}

export function createVideo(src) {
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

export function togglePlay(video) {
  if (video) video.paused ? video.play() : video.pause();
}