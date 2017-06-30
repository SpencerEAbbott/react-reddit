import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header.js';
import Posts from './components/posts.js';


class App extends Component {

  // getInitialState: () => {
  //   return (
  //     posts: []
  //   )
  // },

  render() {
    return (
      <div>
        <Header />
        <Posts />
      </div>
    );
  }
}

export default App;
