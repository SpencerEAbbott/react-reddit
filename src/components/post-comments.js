import React, { Component } from 'react';
import Comment from './comment'

class PostComments extends Component {
  render() {
    return (
      <div className="post_comments">
        <h3 className="comments_header">12 comments</h3>
        <ul class="comment_list">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </ul>

      </div>
    );
  }
}


export default PostComments;
