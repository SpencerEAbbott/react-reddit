import React, { Component } from 'react';
import PostComments from './post-comments';

class Post extends Component {

  render() {

    let thumbnailURL = "http://via.placeholder.com/350x250?text=noThumb";
    if (this.props.post.thumbnail !== "self") {
       thumbnailURL = this.props.post.thumbnail;
    }


    return (
      <div className="post">
        <img
          className="post_image"
          alt="Post Title"
          src={thumbnailURL}
          height={this.props.thumbnail_height}
          width={this.props.thumbnail_width}
        />
        <div className="post_details">
          <h2 className="post_title">{this.props.post.title}</h2>
          <PostComments />
        </div>

      </div>
    );
  }
}


export default Post;
