import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
       number:0 
    }
  render() {
    return (
      <>
        <h1>count is : {this.state.number}</h1>
        <button onClick={this.increment}>increment</button>
      </>
    );
  }

  increment = ()=>{
    this.setState({number:++this.state.number})
  }
}
