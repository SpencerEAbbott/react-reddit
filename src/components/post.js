import React, { Component } from 'react';
import PostComments from './post-comments';
import axios from 'axios';


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


      // let postImageURL = null;
      //
      // if (postMeta[0].data.preview.images[0].source.url.length === 0 ) {
      //   postImageURL = "nothing";
      // } else {
      //   postImageURL = postMeta[0].data.preview.images[0].source.url;
      // }

      // console.log(postImageURL);


    })

    .catch((error) => {
      console.log(error);
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }


  render() {
    // console.log(this.state.postMeta.data);
    // if (this.state.postMeta.data === null) {
    //   return (
    //     <div>Nada</div>
    //   )
    // }

    // const postImageURL = this.state.postMeta[0].data.preview.images[0].source.url.length === 0  ? "asdfghjkl" : this.state.postMeta[0].data.preview.images[0].source.url
    // const thumbnailURL = this.state.postMeta[0].data.preview.images[0].source.url ? "has image" : "null";
    // const postImageURL = postMeta[0].data.preview.images[0].source.url;

    return (
      <div className="post">
        {/* {postImageURL} */}

        <img
          className="post_image"
          alt="Post Title"
          src="#"
          height={this.props.thumbnail_height}
          width={this.props.thumbnail_width}
        />
        <div className="post_details">
          <h2 className="post_title">
            {this.props.post.title}<br />
          </h2>
          <PostComments
            post={this.props.post}
            numComments={this.props.post.num_comments}
          />
        </div>
      </div>
    );
  }
}


export default Post;
