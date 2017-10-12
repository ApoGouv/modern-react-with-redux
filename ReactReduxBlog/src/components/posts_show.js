/**
 * File    : posts_show.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 12/10/2017
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPost} from '../actions';

class PostsShow extends Component {
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
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

export default connect(mapStateToProps, {fetchPost})(PostsShow);