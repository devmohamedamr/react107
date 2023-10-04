import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count:0
  }
  render() {
    return (
      <>
          <h1>count is : {this.state.count}</h1>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
          <button onClick={this.rest}>rest</button>


      </>
    );
  }
  increment = ()=>{
    this.setState({count:++this.state.count})
  }

  rest = ()=>{
    this.setState({count:0})
  }

  decrement = ()=>{
    this.setState({count:--this.state.count})
  }
}
