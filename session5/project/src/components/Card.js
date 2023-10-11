import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    let {title,desc,btn} = this.props
    return (
      <>
        <div className="card col-md-4">
        {/* <img src="..." class="card-img-top" alt="..."> */}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="#" className="btn btn-primary">{btn}</a>
        </div>
        </div>
      </>
    );
  }
}
