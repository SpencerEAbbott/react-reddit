import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <li className="comment">
        <div className="comment_body">
          {this.props.comment.body}
        </div>
        <div className="comment_author">
          - {this.props.comment.author}
        </div>
      </li>
    );
  }
}


export default Comment;
