import React, { Component } from 'react';

class DeleteControl extends Component {
    render() {
      return (
        <button
          onClick={function(event){
            event.preventDefault();
            this.props.onChangePage('Delete');
          }.bind(this)}
        >delete</button>           
      );
    }
  }

export default DeleteControl;