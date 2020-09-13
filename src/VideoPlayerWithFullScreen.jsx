import { Dialog } from "@material-ui/core";
import React, { useState } from "react";

import { VideoPlayer } from "./VideoPlayer";
import { withReversePortal } from "./atoms/withReversePortal";

const VideoPlayerWithReversePortal = withReversePortal(VideoPlayer);

export default VideoPlayerWithFullScreen = ({
  fullScreen = false,
  src,
  poster,
}) => {
  const [fullScreenOn, toggleFullScreen] = useState(fullScreen);

  return (
    <VideoPlayerWithReversePortal
      isDefaultState={!fullScreenOn}
      NonDefaultStateComp={({ children }) => (
        <Dialog fullScreen open>
          {children}
        </Dialog>
      )}
      {...{ poster, src, toggleFullScreen }}
    />
  );
};
