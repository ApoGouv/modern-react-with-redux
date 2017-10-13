/**
 * File    : index.js.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 9/10/2017
 */
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import {youTubeAPIKey} from './youtube_API_KEY';

// get the API Key for youtube.com
const API_KEY = youTubeAPIKey();

/**
 * App is our Parent component
 */
class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  /**
   * use the youtube-api-search
   * we pass in a search term
   */
  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        {/*
          - here we pass prop videos to the VideoList
          - and set the new state with the clicked video
          */}
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
