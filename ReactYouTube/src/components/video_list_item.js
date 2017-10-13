/**
 * File    : video_list_item.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 9/10/2017
 */

import React from 'react';

/**
 * use the video, onVideoSelect properties of props
 * @param video: comes from the VideoList component
 * @param onVideoSelect: comes from the VideoList component
 * @returns {jsx}
 * @constructor
 */
const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video; ~~ to {video} above

  const imageUrl = video.snippet.thumbnails.default.url;
  /* the onClick: sets the property "props.onVideoSelect" to the video that was clicked. */
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-list">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;