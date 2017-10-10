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
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}/>
      </div>
    );
  }
}


export default SearchBar;