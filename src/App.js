import React,  { Component } from 'react';
import Subject from './components/Subject';
import NAV from './components/NAV';
import Article from './components/Article';
import './App.css';



class App extends Component 
  {
    constructor(props){
      super(props);
      //state 컴포넌트가 실행될 때 constructor함수 있다면 제일먼저 실행되서 초기화를 담당한다.
      this.state={
        mode:'read',
        subject:{title:"web",sub:" world wide web!"},
        welcome:{title:'welcome',desc:'hello, react!!'},
        contents:[
          {id:1, title:'html', desc:'html is for information'},
            {id:2, title:'css', desc:'css is for design'},
            {id:3, title:'JavaScript', desc:'javascript is for interactive'}          
        ]
      }
    }
    render(){
      console.log('App render')
      var _title, _desc = null;
      if(this.state.mode ==='welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
      }else if (this.state.mode ==='read'){
        _title=this.state.contents[0].title;
        _desc=this.state.contents[0].desc;
      }
    return (
    <div className="App">
    
   <Subject 
  title={this.state.subject.title} 
  sub={this.state.subject.sub}
  onChangePage={function(){
   this.setState({mode:'welcome'});
  }.bind(this)}>
  </Subject> 

  <NAV 
  onChangePage={function(){
    this.setState({mode:'read'});
  }.bind(this)} 
  data ={this.state.contents}
  ></NAV>
  <Article title={_title} desc={_desc}></Article>

    </div>
  );
}}

export default App;
