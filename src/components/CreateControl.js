import React, { Component } from 'react';

class CreateControl extends Component {
    render() {
      return (
        <a
          href="/create"
          onClick={function(event){
            event.preventDefault();
            this.props.onChangePage('Create');
          }.bind(this)}
        >create</a>            
      );
    }
  }

export default CreateControl;