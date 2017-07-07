import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="outer_container__header">
        <img
          className="header_logo"
          src={require('../images/logo.png')}
          width="500"
          height="200"
          alt="Seattle Seahawks SubReddit"/>
        <h1 className="header_title">r/Seahawks</h1>
      </div>
    );
  }
}


export default Header;
