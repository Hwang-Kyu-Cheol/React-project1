import React, { Component } from 'react';

class UpdateArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.content.id,
      title: this.props.content.title,
      description: this.props.content.description
    }
  }

  render() {
    return (
      <article>
        <h2>Update</h2>
        <div>
          <form
            action="/process_update"
            onSubmit={function(event){
              event.preventDefault();
              const _id = this.state.id;
              const _title = event.target.title.value;
              const _desc = event.target.description.value;
              this.props.onUpdate(_id, _title, _desc);
            }.bind(this)}>
              <input 
                type="text" name="title" placeholder="title"
                value={this.state.title}
                onChange={
                  function(event){
                    this.setState(
                      {
                        title: event.target.value
                      }
                    )
                  }.bind(this)
                }></input><br></br>
              <textarea 
                name="description" placeholder="description"
                value={this.state.description}
                onChange={
                  function(event){
                    this.setState(
                      {
                        description: event.target.value
                      }
                    )
                  }.bind(this)
                }></textarea><br></br>
              <input type="submit" value="OK"></input>
          </form>            
        </div>
      </article>
    );
  }
}

export default UpdateArticle;