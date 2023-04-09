import React,  { Component } from 'react';

class NAV extends Component{
    shouldComponentUpdate(newProps, newState){
      console.log('===>Toc render shouldComponentUpdate',
    newProps.data,
    this.props.data);
    if(this.props.data===newProps.data){
      
        return false;
     }
    return true;
    }
    render(){
      console.log('=====> toc render')
      var lists=[];
      var data=  this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
          href={"/contents/"+data[i].id}
          data-id={data[i].id}
          onClick={function(e){
        
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}
          >{data[i].title}</a>
          </li>)
        i=i+1;
      }

      return(
        <nav>
        <ul>
        
          {lists}
        </ul>
      </nav>
      )
    }
  }
  export default NAV;