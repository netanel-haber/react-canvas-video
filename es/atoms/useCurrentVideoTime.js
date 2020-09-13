import { useEffect, useState } from "react";

export var useCurrentVideoTime = function useCurrentVideoTime(video) {
  var _useState = useState(video.currentTime),
      currentTime = _useState[0],
      updateCurrentTime = _useState[1];

  useEffect(function () {
    var changeCurrentTime = function changeCurrentTime() {
      return updateCurrentTime(video.currentTime);
    };
    video.addEventListener("timeupdate", changeCurrentTime);
    return function () {
      return video.removeEventListener("timeupdate", changeCurrentTime);
    };
  }, [video]);

  return currentTime;
};