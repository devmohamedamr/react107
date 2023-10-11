import React, { Component } from 'react';
import axios from 'axios';
export default class Data extends Component {

    state = {
        users:[]
    }
  render() {
    return (
      <>
        {this.state.users.map( (u)=> <li>{u.email}</li> )}
      </>
    );
  }

  componentDidMount(){
    this.getusers()
  }

  getusers = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        this.setState({users:res.data})
        console.log(res.data)
    }) 
  }
}
