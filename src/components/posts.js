import React, { Component } from 'react';
import Post from './post.js';

class Posts extends Component {
  render() {
    return (
      <div className="outer-container__posts">
        <section className="container">
          {this.props.posts.map(post =>
            <Post key={post.id} post={post}>{post.title}</Post>
          )}
        </section>
      </div>

    );
  }
}


export default Posts;
