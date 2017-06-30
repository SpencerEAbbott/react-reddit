import React, { Component } from 'react';
import PostComments from './post-comments';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <img className="post_image" alt="Post Title" src="https://i.redditmedia.com/oK9jpjyefj-AT2ZSUaTMwdJbxFOsssWKIzEvN8yDeN4.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=640&amp;s=0e36a188273cc8b2eb91f82cae524b1d" />
        <div className="post_details">
          <h2 className="post_title">Bleacher Report's most overpaid and underpaid players from each team. Seahawks the only team to have 'none' for overpaid.</h2>
          <PostComments />          
        </div>

      </div>
    );
  }
}


export default Post;
