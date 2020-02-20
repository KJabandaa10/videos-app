import React from "react";
import VideoCard from "./VideoCard";

const VideoList = props => {
  const vids = props.vids.map(vid => {
    return <VideoCard content={vid} key={vid.id.videoId} />;
  });

  return <div className="ui grid">{vids}</div>;
};

export default VideoList;
