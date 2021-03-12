import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {todos:[],newEntry:"",listType:"all"
    }
  }
  render(){
  return (
    <div className="App">
      
<section class="todoapp">
<header class="header">
    <h1>todos</h1>
    
    <input class="new-todo" placeholder="What needs to be done?" autofocus=""
     onChange={event => {this.setState({newEntry: event.target.value})}}
     onKeyPress={event => {
       if (event.key === 'Enter') {
       var array=this.state.todos;
       var object={};
       object['item']=this.state.newEntry;
       object['state']=false;
       array.push(object);
       this.setState({todos:array});
       this.setState({newEntry: ""});
       event.target.value="";
       }
     }}
    />
</header>
<section class="main">
{this.state.todos.length>0 &&
<input id="toggle-all" class="toggle-all" type="checkbox" checked={this.state.todos.filter(obj => obj.state).length===this.state.todos.length ?true:false}
onClick={(e)=>{
  var array=[...this.state.todos];
  for(var f=0;f<this.state.todos.length;f++){

    array[f].state=e.target.checked;
    
  }
  this.setState({todos:array});
}}
/>}
<label for="toggle-all"></label>
<ul class="todo-list">
{this.state.todos.map((todo,i)=>{
  if(this.state.listType==="active" && todo.state===false ){
return(
  <li class={!todo.state? "":"completed"}>
  <div  class="view"
  >

<input class="toggle" type="checkbox" checked={todo.state}

onClick={()=>{
  var array=[...this.state.todos];
  array[i].state=!array[i].state;
  this.setState({todos:array});
}}

/>
    <label>{todo.item}</label>
    <button class="destroy" onClick={()=>{

const reducedArr = [...this.state.todos];

reducedArr.splice(i, 1);

this.setState({todos: reducedArr})
      
      
    }}></button>
    </div>
    </li>
)}else if(this.state.listType==="completed" && todo.state===true ){
  return(
    <li class={!todo.state? "":"completed"}>
    <div  class="view"
    >
  
  <input class="toggle" type="checkbox" checked={todo.state}
  
  onClick={()=>{
    var array=[...this.state.todos];
    array[i].state=!array[i].state;
    this.setState({todos:array});
  }}
  
  />
      <label>{todo.item}</label>
      <button class="destroy" onClick={()=>{
  
  const reducedArr = [...this.state.todos];
  
  reducedArr.splice(i, 1);
  
  this.setState({todos: reducedArr})
        
        
      }}></button>
      </div>
      </li>
  )}
  else if(this.state.listType==="all" ){
    return(
      <li class={!todo.state? "":"completed"}>
      <div  class="view"
      >
    
    <input class="toggle" type="checkbox" checked={todo.state}
    
    onClick={()=>{
      var array=[...this.state.todos];
      array[i].state=!array[i].state;
      this.setState({todos:array});
    }}
    
    />
        <label>{todo.item}</label>
        <button class="destroy" onClick={()=>{
    
    const reducedArr = [...this.state.todos];
    
    reducedArr.splice(i, 1);
    
    this.setState({todos: reducedArr})
          
          
        }}></button>
        </div>
        </li>
    )}else{
      return (<li></li>)
    }
    
})}</ul></section>
{this.state.todos.length>0 &&
<footer class="footer ">
    <span class="todo-count">{this.state.todos.filter(obj => !obj.state).length} items left</span>
    <ul class="filters">
        <li onClick={()=>{this.setState({listType:"all"})}}>
            <a class={this.state.listType==="all" && "selected"} href="all">All</a>
        </li>
        <li  onClick={()=>{this.setState({listType:"active"})}}>
            <a class={this.state.listType==="active" && "selected"} href="active">Active</a>
        </li>
        <li  onClick={()=>{this.setState({listType:"completed"})}}>
            <a class={this.state.listType==="completed" && "selected"} href="completed">Completed</a>
        </li>
    </ul>
    <button class="clear-completed" 
    onClick={()=>{

    const newTaskArray = this.state.todos.filter(todo => todo.state !== true);
    this.setState({ todos: newTaskArray });
    }}
    >Clear completed</button>
</footer>}
</section>

        </div>
     
   
  );}
}

export default App;
