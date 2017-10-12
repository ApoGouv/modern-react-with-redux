/**
 * File    : posts_new.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 12/10/2017
 */
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {createPost} from '../actions';

class PostsNew extends Component {
  renderField(field) {
    // destructure some values fro mthe 'field' to clean up our code
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={field.name}>{field.label}</label>
        <input
          id={field.name}
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="form-control-feedback">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderTextareaField(field) {
    // destructure some values fro mthe 'field' to clean up our code
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={field.name}>{field.label}</label>
        <textarea
          id={field.name}
          className="form-control"
          {...field.input}
        />
        <div className="form-control-feedback">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // this === component
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <h3>Add a New Post</h3>
        </div>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderTextareaField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  //console.log(values); -> {title: 'asdf', categories: 'asdf', content: 'asdf'}
  const errors = {};

  // Validate the inputs from 'values'
  // Field name property MUST match the error.name
  if (!values.title) {
    errors.title = "Enter a title please.";
  }
  if (values.title) {
    if (values.title.length < 3) {
      errors.title = "Title must be at least 3 characters.";
    }
  }

  if (!values.categories) {
    errors.categories = "Enter some categories please.";
  }
  if (!values.content) {
    errors.content = "Enter some content please.";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux-form assumes form is invalid
  return errors;
}

// this helper will make possible for redux-form to connect with the reducer
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
);