import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => { // videos is an array of 5 video search results
  const renderedList = videos.map(video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />; // just passing props (function) down to VideoItem
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
