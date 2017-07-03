import React, { Component } from 'react';
import PostComments from './post-comments';
import axios from 'axios';


class Post extends Component {

  constructor(props) {
      super(props);

      this.state = {
        postMeta: [],
        preview: null,
        comments: [],
      };
    }

  componentDidMount() {

    axios.get(`https://www.reddit.com${this.props.post.permalink}.json`)


    .then((response) => {
      // post array of details for post
      // this allows us to pull in larger images than the thumbnail
      let postMeta = response.data[0].data.children.map(obj => obj.data);
      console.log(postMeta[0]);
      //postMeta = postMeta[0];
      this.setState({ preview: postMeta[0].preview ? postMeta[0].preview : null});

      let postMeta_Image = postMeta[0];

/*
      console.log(
        postMeta_Image.preview.images[0].id
      );
      */




      // comments array of details for post
      const comments = response.data[1].data.children.map(obj => obj.data);
      // console.log(comments);
      this.setState({ comments });

    })

    .catch((error) => {
      console.log(error);
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }


  render() {
    console.log(this.state);
    if (this.state.preview === null) {
      return (
        <div>works</div>
      )
    }

    const thumbnailURL = this.state.postMeta[0].images ? this.state.postMeta[0].images[0].id : "yup";


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
          <h2 className="post_title">
            {this.props.post.title}<br />
          </h2>
          <PostComments comments={this.state.comments}/>
        </div>
      </div>
    );
  }
}


export default Post;
