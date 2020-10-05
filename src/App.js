import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo/todo';
import './bootstarp.css'
class App extends Component {
  render(){
  return (
    <div className="App">
  {/* <Counter/>*/}
    <Todo/>

    </div>

  );
  }
}



export default App;
