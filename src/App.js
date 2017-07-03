import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header.js';
import Posts from './components/posts.js';


class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        posts: []
      };
    }


  componentDidMount() {

    // https://daveceddia.com/ajax-requests-in-react/
    axios.get('http://www.reddit.com/r/seahawks.json')

      .then(response => {
        const posts = response.data.data.children.map(obj => obj.data);
        this.setState({ posts });
        // console.log({posts});
      })

      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <Header />
        <Posts posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
