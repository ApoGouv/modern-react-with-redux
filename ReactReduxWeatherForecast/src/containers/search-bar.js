/**
 * File    : search-bar.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 11/10/2017
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    // we bind the 'this' variable to be the SearchBar in the onInputChange()
    this.onInputChange = this.onInputChange.bind(this);
    // we bind the 'this' variable to be the SearchBar in the onFormSubmit()
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    // do not submit, in order to prevent page reload
    event.preventDefault();

    // make a call to the weather api
    this.props.fetchWeather(this.state.term);
    // clear the input
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

// the null here says:we don't need the redux state here
export default connect(null, mapDispatchToProps)(SearchBar);