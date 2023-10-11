import React, { Component } from 'react';

export default class Home extends Component {
    state = {
        colors:['red','green','blue','yellow'],
        numbers :[10,2301,12,434]
    }
  render() {
    let {colors,numbers} = this.state
    return (
      <>
        <ul>
              {colors.map((c)=><li>{c}</li>)}
        </ul>

        <ul>
            {numbers.map((x)=><li>{x}</li>)}
        </ul>
      </>
    );
  }
}
