/**
 * File    : posts_show.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 12/10/2017
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPost, deletePost} from '../actions';

class PostsShow extends Component {
  componentDidMount(){
    // save a request if we already have the data - this is not needed, but is network efficient
    if (!this.props.post){
      // get the :id wildcard, passed in the url
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const {id} = this.props.match.params;

    // pass a callback to the action creator, to cal after it finishes it's execution
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render(){
    // this.props === ownProps
    const {post} = this.props;

    if (!post){
        return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);