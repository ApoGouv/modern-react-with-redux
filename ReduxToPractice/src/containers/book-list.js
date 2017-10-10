/**
 * File    : book-list.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 10/10/2017
 */
import React, { Component } from 'react';
// react-redux: is the glu between the React and the Redux libraries
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

/**
 * mapStateToProps(): return an object that will be available
 *                    to our component as: this.props.books
 * @param state: application-level state
 * @returns {{}}
 */
function mapStateToProps (state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// connect()(): takes a function and a component and produces a container
// A container is a component that is aware of the state that is contained by Redux.
//
export default connect(mapStateToProps)(BookList);
