import React, { Component } from 'react';

class CreateArticle extends Component {
    render() {
      return (
        <article>
          <h2>Create</h2>
          <div>
            <form
              action="/process_create"
              onSubmit={function(event){
                event.preventDefault();
                const _title = event.target.title.value;
                const _desc = event.target.description.value;
                this.props.onCreate(_title, _desc);
              }.bind(this)}>
                <input type="text" name="title" placeholder="title"></input><br></br>
                <textarea name="description" placeholder="description"></textarea><br></br>
                <input type="submit" value="OK"></input>
            </form>            
          </div>
        </article>
      );
    }
  }

export default CreateArticle;