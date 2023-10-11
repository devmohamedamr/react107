import React, { Component } from 'react';
import Card from './Card'
export default class Home extends Component {
    state = {
        cards:[
            {title:"card 1",desc:'awdwad awd',btn:"go"},
            {title:"card 2",desc:'frffrfrfawdwad awd',btn:"click"},
            {title:"card 3",desc:'edfawdawdwadwadwadwa',btn:"send"},
            {title:"card 4",desc:'edfawdawdwadwadwadwa',btn:"send"},
            {title:"card 5",desc:'edfawdawdwadwadwadwa',btn:"send"},
            {title:"card 6",desc:'edfawdawdwadwadwadwa',btn:"send"}
        ]
    }
  render() {
    let {cards} = this.state
    return (
      <>
       <div className='container'>
            <div className='row'>
                {cards.map( (c)=> <Card title={c.title} desc={c.desc} btn={c.btn} /> )}
            </div>
       </div>
      </>
    );
  }
}
