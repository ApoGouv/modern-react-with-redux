/**
 * File    : index.js.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 9/10/2017
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import {youTubeAPIKey} from './youtube_API_KEY';

// get the API Key for youtube.com
const API_KEY = youTubeAPIKey();

// App is our Parent component
class App extends Component {
  constructor (props) {
    super (props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // this.setState({videos: videos}); is the same as below
      // because the key:value pair has the same name
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        {/* here we pass prop videos to the VideoList */}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
