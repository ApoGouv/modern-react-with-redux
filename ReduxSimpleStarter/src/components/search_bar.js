/**
 * File    : search_bar.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 9/10/2017
 */
import React, {Component} from 'react';

// Functional Component
//
// const SearchBar = () => {
//   return <input />
// };

// Class component
//
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  /**
   * change/update the state and call the onSearchTermChange
   * @param term
   */
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;