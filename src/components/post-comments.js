import React, { Component } from 'react';
import Comment from './comment';
import axios from 'axios';


class PostComments extends Component {

  constructor(props) {

    super(props);
      this.state = {
        comments: [],
        showComponent: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

  componentDidMount() {

    // https://daveceddia.com/ajax-requests-in-react/
    axios.get(`https://www.reddit.com${this.props.post.permalink}.json`)

      .then(response => {
        // comments array of details for post
        const comments = response.data[1].data.children.map(obj => obj.data);
        this.setState({ comments });
        // console.log(comments);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  // set the state of the comments component to true or false
  handleClick = () => {
    if ( this.state.showComponent === false) {
      this.setState({
        showComponent: true
      });
    } else {
      this.setState({
        showComponent: false
      });
    }
    console.log(this.state.showComponent);
  }

  render() {
    return (
      <div className="post_comments">
        <h3 onClick={this.handleClick} className="comments_header">{this.props.numComments} comments</h3>
        { this.state.showComponent ?
          <div>
            <ul className="comment_list">
              {this.state.comments.map(comment =>
                <Comment key={comment.id} comment={comment} />
              )}
            </ul>
            <p onClick={this.handleClick} className="comments_hide">(hide comments)</p>
          </div>
        : null}
      </div>
    );
  }



}


export default PostComments;


// {self.state.comments.map(comment =>
//   <Comment className="this.handleClick" key={comment.id} comment={comment} />
// )}
