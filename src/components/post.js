import React, { Component } from 'react';
import PostComments from './post-comments';
import axios from 'axios';

const postImagePlaceholder = require('../images/post_placeholder.jpg');

class Post extends Component {

  constructor(props) {
    super(props);

    this.state = {
      postMeta: [],
      preview: null,
    };
  }

  componentDidMount() {

    axios.get(`https://www.reddit.com${this.props.post.permalink}.json`)

    .then((response) => {
      // post array of details for post
      // this allows us to pull in larger images than the thumbnail
      const postMeta = response.data[0].data.children;

      this.setState({ postMeta })
    })

    .catch((error) => {
      console.log(error);
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }


  render() {

    const{
      thumbnail_height,
      thumbnail_width,
      post,
      post: {
        title,
        permalink,
        preview,
        url
       },
     } = this.props;

    return (
      <div className="post">
        <a className="post_link"
           href={url}
           target="_blank"
           rel="noopener noreferrer">
          <img
            className="post_image"
            alt={title}
            src={preview ? preview.images[0].source.url : postImagePlaceholder}
            height={thumbnail_height}
            width={thumbnail_width}
          />
        </a>
        <div className="post_details">
          <h2 className="post_title">
            <a className="post_link"
               href={url}
               target="_blank"
               rel="noopener noreferrer">
               {title}
             </a>
          </h2>
          <PostComments
            postPermalink={permalink}
            post={post}
          />
        </div>
      </div>
    );
  }
}


export default Post;
