import React, { Component } from 'react';

class UpdateControl extends Component {
    render() {
      return (
        <a
          href="/update"
          onClick={function(event){
            event.preventDefault();
            this.props.onChangePage('Update');
          }.bind(this)}
        >update</a>           
      );
    }
  }

export default UpdateControl;