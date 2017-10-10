/**
 * File    : index.js.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 9/10/2017
 */
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

import {youTubeAPIKey} from './youtube_API_KEY';

// get the API Key for youtube.com
const API_KEY = youTubeAPIKey();

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
