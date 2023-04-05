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
        subject:{title:"web",sub:" world wide web!"},
        contents:[
          {id:1, title:'html', desc:'html is for information'},
            {id:2, title:'css', desc:'css is for design'},
            {id:3, title:'JavaScript', desc:'javascript is for interactive'}          
        ]
      }
    }
    render(){
    return (
    <div className="App">
    
  <Subject title={this.state.subject.title} 
  sub={this.state.subject.sub}></Subject>
  <Subject title="React" sub=" world wide web!"></Subject>
  <NAV data ={this.state.contents}></NAV>
  <Article title="html" desc="    html is makeup language"></Article>

    </div>
  );
}}

export default App;
