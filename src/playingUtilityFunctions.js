import { RATIO } from "./consts";

export function getPlayEventListener(
  video,
  canvas
) {
  const { clientWidth } = canvas;
  canvas.width = clientWidth;
  canvas.height = clientWidth / RATIO;
  const context = canvas.getContext("2d");
  return () =>
    requestVideoToBeAnimatedToCanvas({ video, context, canvas });
}

export function createVideo(src) {
  const video = document.createElement("video");
  const source = document.createElement("source");
  source.setAttribute("src", src);
  video.appendChild(source);
  return video;
}

function requestVideoToBeAnimatedToCanvas({
  video,
  context,
  canvas,
}) {
  if (!context)
    return;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  if (video.paused || video.ended) return;
  requestAnimationFrame(() =>
    requestVideoToBeAnimatedToCanvas({ video, context, canvas })
  );
}

export function togglePlay(video) {
  if (video) video.paused ? video.play() : video.pause();
}
