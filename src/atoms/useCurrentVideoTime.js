import { useEffect, useState } from "react";

export const useCurrentVideoTime = (video) => {
  const [currentTime, updateCurrentTime] = useState(video.currentTime);

  useEffect(() => {
    const changeCurrentTime = () => updateCurrentTime(video.currentTime);
    video.addEventListener("timeupdate", changeCurrentTime);
    return () => video.removeEventListener("timeupdate", changeCurrentTime);
  }, [video]);

  return currentTime;
};
