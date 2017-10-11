/**
 * File    : search-bar.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 11/10/2017
 */
import React, {Component} from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  };
}