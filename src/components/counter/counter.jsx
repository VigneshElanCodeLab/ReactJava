import React, { Component } from 'react';
import './counter.css'


class Counter extends Component{
    render(){
        return (
          <div className="counter">
            <CounterButton by={1}/>
            <CounterButton by={5}/>
            <CounterButton by={10}/>
      
          </div>
      
        );
        }
}
class CounterButton extends Component{ 
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
increment =()=>{
this.setState({counter:this.state.counter+this.props.by});
}

render(){
    return <div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            <span className="count">{this.state.counter}</span>
          </div>
}
}

export default Counter;