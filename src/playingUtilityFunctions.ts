import { RATIO } from "./consts";
import { PlayEventHandler, TickArgsObject } from "./types";

export function getPlayEventListener(
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement
): PlayEventHandler {
  const { clientWidth } = canvas;
  canvas.width = clientWidth;
  canvas.height = clientWidth / RATIO;
  const context = canvas.getContext("2d");
  return (): void =>
    requestVideoToBeAnimatedToCanvas({ video, context, canvas });
}

export function createVideo(src: string): HTMLVideoElement {
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
}: TickArgsObject): void {
  context?.drawImage?.(video, 0, 0, canvas.width, canvas.height);
  if (video.paused || video.ended) return;
  requestAnimationFrame(() =>
    requestVideoToBeAnimatedToCanvas({ video, context, canvas })
  );
}

export function togglePlay(video: HTMLVideoElement | undefined): void {
  if (video) video.paused ? video.play() : video.pause();
}
