import React, { Component } from 'react';
import Comment from './comment';
import axios from 'axios';


class PostComments extends Component {

  constructor(props) {

    super(props);
      this.state = {
        comments: [],
        showComponent: false,
      };
      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    axios.get(`https://www.reddit.com${this.props.post.permalink}.json`)

      .then(response => {
        // comments array of details for post
        const comments = response.data[1].data.children.map(obj => obj.data);
        this.setState({ comments });
      })

      .catch((error) => {
        console.log(error);
      });
  }


  handleClick = () => {
    this.setState({ showComponent: !this.state.showComponent });
  }


  render() {
    const handleClick = this.handleClick;
    return (
      <div className="post_comments">
        <h3 onClick={handleClick} className="comments_header">Comments</h3>
        { this.state.showComponent ?
          <div>
            <ul className="comment_list">
              {this.state.comments.map(comment =>
                <Comment
                  postPermalink={this.props.postPermalink}
                  key={comment.id}
                  comment={comment} />
              )}
            </ul>
            <p onClick={handleClick} className="comments_hide">hide comments</p>
          </div>
        : null}
      </div>
    );
  }
}


export default PostComments;
