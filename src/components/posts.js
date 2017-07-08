import React, { Component } from 'react';
import Post from './post.js';


export const Posts = ({ posts }) => (
  <div className="outer-container__posts">
    <section className="container">
      {posts.map(post =>
        <Post key={post.id} post={post}>{post.title}</Post>
      )}
    </section>
  </div>
);


export default Posts;
