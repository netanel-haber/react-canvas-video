import { SetStateAction } from "react";

export type VideoPlayerProps = {
  src: string;
  toggleFullScreen: SetStateAction<boolean>;
  poster: string;
  className?: string;
};

export type BarProps = {
  video: HTMLVideoElement;
  className?: string;
  toggleFullScreen: SetStateAction<boolean>;
};

export type PlayEventHandler = (ev: Event) => void;

export type TickArgsObject = {
  video: HTMLVideoElement;
  context: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement;
};
