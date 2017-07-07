import React, { Component } from 'react';
import axios from 'axios';


class Comment extends Component {

  constructor(props) {

    super(props);
      this.state = {
        commentReply: [],
      };
    }

  componentDidMount() {

    console.log(`https://www.reddit.com${this.props.postPermalink}${this.props.comment.id}.json`);
    // https://daveceddia.com/ajax-requests-in-react/
    axios.get(`https://www.reddit.com/r/Seahawks/comments/${this.props.postPermalink}${this.props.comment.id}.json`)

      .then(response => {
        // comments array of details for post
        const commentReply = response.data[1].data.children.map(obj => obj.data);
        this.setState({ commentReply });

      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    const{
      comment: {
        body,
        author,
      }
     } = this.props;

    return (
      <li className="comment">
          <div className="comment_body">
            {body}
          </div>
          <div className="comment_author">
            - {author}
          </div>
      </li>
    );
  }
}

export default Comment;
