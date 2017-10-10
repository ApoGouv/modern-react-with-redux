/**
 * File    : video_detail.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 9/10/2017
 */

import React from 'react';

// use only the video property of props
const VideoDetail = ({video}) => {
  if (!video) {
    // we use return here, to stop the execution if we still loading data
    return <div>Loading....</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;