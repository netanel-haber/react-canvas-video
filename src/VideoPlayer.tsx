import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Canvas } from "./atoms/Canvas";
import Bar from "./Bar";
import {
  createVideo,
  getPlayEventListener,
  togglePlay,
} from "./playingUtilityFunctions";
import { VideoPlayerProps } from "./types";

export const VideoPlayer = styled(
  ({
    src,
    toggleFullScreen,
    poster,
    className = undefined,
  }: VideoPlayerProps) => {
    const [hiddenVideo, updateHiddenVideo] = useState<HTMLVideoElement>();
    const [canvasRef, updateCanvasRef] = useState<HTMLCanvasElement | null>(
      null
    );

    useEffect(() => {
      if (!hiddenVideo || !canvasRef) return;
      const playEventListener = getPlayEventListener(hiddenVideo, canvasRef);
      hiddenVideo.addEventListener("play", playEventListener);
      return (): void =>
        hiddenVideo.removeEventListener("play", playEventListener);
    }, [hiddenVideo, canvasRef]);

    useEffect(() => {
      !hiddenVideo && updateHiddenVideo(createVideo(src));
      return (): void => {
        if (hiddenVideo) {
          hiddenVideo.paused && hiddenVideo.pause();
          hiddenVideo.remove();
        }
      };
    }, [src, hiddenVideo]);

    return (
      <div className={className}>
        <Canvas
          onContextMenu={(e): void => e.preventDefault()}
          poster={poster}
          onClick={(): void => togglePlay(hiddenVideo)}
          ref={updateCanvasRef}
        />
        {hiddenVideo && (
          <Bar video={hiddenVideo} toggleFullScreen={toggleFullScreen} />
        )}
      </div>
    );
  }
)`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  direction: ltr;
`;
