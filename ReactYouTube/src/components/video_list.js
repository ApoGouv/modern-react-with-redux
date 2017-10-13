/**
 * File    : video_list.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 9/10/2017
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import VideoListItem from './video_list_item';

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const VideoList = (props) => {
  // build an array of VideoListItem components
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });

  const transitionsOptions = {
    transitionName: "fade",
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 500,
  };

  return (
    <ul className="col-md-4 list-group">
      <ReactCSSTransitionGroup {... transitionsOptions}>
        {videoItems}
      </ReactCSSTransitionGroup>
    </ul>
  );
};

export default VideoList;