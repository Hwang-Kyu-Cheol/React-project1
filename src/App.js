import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ReadArticle from './components/ReadArticle';
import CreateArticle from './components/CreateArticle';
import Control from './components/Control';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.max_index = 3;
    this.state = {
      mode: 'Welcome',
      subject: {
        title: "WEB",
        sub: "World Wide Web"
      },
      Welcome: {
        title: "Welcome",
        description: "Welcome to Web"
      },
      selected_contents: {
        id:0
      },
      contents: [
        {
          id: 1,
          title: "HTML",
          description: "Its HTML"
        },
        {
          id: 2,
          title: "CSS",
          description: "Its CSS"
        },
        {
          id: 3,
          title: "JavaScript",
          description: "Its JavaScript"
        }
      ]
    };
  }

  render() {
    let _title, _desc, _article;
    if(this.state.mode === 'Welcome'){
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.description;
      _article = <ReadArticle title={_title} description={_desc}></ReadArticle>;
    } else if(this.state.mode === 'Read'){
      for(let i = 0; i<this.state.contents.length; i++){
        if(this.state.contents[i].id === this.state.selected_contents){
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].description;
          break;
        }
      }
      _article = <ReadArticle title={_title} description={_desc}></ReadArticle>;
    } else if(this.state.mode === 'Create'){
      _article = <CreateArticle onCreate={function(_title, _desc){
        this.max_index = this.max_index + 1;
        const newArticle = {
          id: this.max_index,
          title: _title,
          description: _desc
        };
        const grpArticle = this.state.contents.concat(newArticle);
        this.setState(
          {
            contents: grpArticle
          }
        );
      }.bind(this)}></CreateArticle>
    }
    return (
      <div className="App">
        <Header 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState(
              {
                mode: 'Welcome'
              }
            )
          }.bind(this)}
        ></Header>
        <Navigation 
          contents={this.state.contents}
          onChangePage={function(id){
            this.setState(
              {
                mode: 'Read',
                selected_contents: Number(id)
              }
            );
          }.bind(this)}
        ></Navigation>
        <Control
          mode={this.state.mode}
          onChangePage={function(_mode){
            this.setState(
              {
                mode: _mode
              }
            )
          }.bind(this)}
        ></Control>
        <hr></hr>
        {_article}
      </div>
    );
  }  
}

export default App;
