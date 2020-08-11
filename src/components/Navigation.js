import React, { Component } from 'react';

class Navigation extends Component {
    render() {
      const contents = this.props.contents;

      let lists = [];
      for(let i = 0; i<contents.length; i++){
        lists.push(
          <li key={contents[i].id}>
            <a 
              href={"/contents/"+contents[i].id}
              data-id={contents[i].id}
              onClick={function(event){
                event.preventDefault();
                this.props.onChangePage(event.target.dataset.id);
              }.bind(this)}
            >{contents[i].title}</a></li>);
      }

      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

export default Navigation;