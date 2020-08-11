import React, { Component } from 'react';

class Header extends React.Component {
    render() {
      return (  
        <header>
          <h1><a href="/" onClick={function(event){
            event.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          <p>{this.props.sub}</p>
        </header>
      );
    }
  }

export default Header;