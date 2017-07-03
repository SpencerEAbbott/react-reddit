import React, { Component } from 'react';
import Comment from './comment'

class PostComments extends Component {
  render() {
    return (
      <div className="post_comments">
        <h3 className="comments_header">12 comments</h3>
        <ul className="comment_list">
          {this.props.comments.map(comment =>
            <Comment className="comment" key={comment.id} comment={comment} />
          )}
        </ul>
      </div>
    );
  }
}


export default PostComments;
