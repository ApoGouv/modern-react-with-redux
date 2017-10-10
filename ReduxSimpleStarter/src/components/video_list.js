/**
 * File    : video_list.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 9/10/2017
 */

import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // build an array of VideoListItem components
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;