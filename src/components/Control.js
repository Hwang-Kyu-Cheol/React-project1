import React, { Component } from 'react';
import CreateControl from './CreateControl';
import UpdateControl from './UpdateControl';
import DeleteControl from './DeleteControl';

class Control extends Component {
    render() {
      let _createControl, _updateControl, _deleteControl;
      if(this.props.mode === 'Welcome'){
        _createControl = <CreateControl onChangePage={this.props.onChangePage}></CreateControl>;
        _updateControl = '';
        _deleteControl = '';
      } else if(this.props.mode === 'Read'){
        _createControl = '';
        _updateControl = <UpdateControl onChangePage={this.props.onChangePage}></UpdateControl>;
        _deleteControl = <DeleteControl onChangePage={this.props.onChangePage}></DeleteControl>;
      } else {
        _createControl = '';
        _updateControl = '';
        _deleteControl = '';
      }

      return (
        <div>
            {_createControl}       
            {_updateControl}
            {_deleteControl}
        </div>
      );
    }
  }

export default Control;