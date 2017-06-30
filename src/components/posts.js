import React, { Component } from 'react';
import Post from './post.js';

class Posts extends Component {
  render() {
    return (
      <div className="outer-container__posts">
        <section className="container">
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </div>

    );
  }
}


export default Posts;
