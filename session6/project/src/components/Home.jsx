import React, { Component } from 'react';
import axios from 'axios'
export default class Home extends Component {
    state = {
        users:[]
    }
  render() {
    return (
      <>
        <h1>test</h1>
        <ul>
            {this.state.users.map( (user)=> <li key={user.id}>{user.email}</li> )}
        </ul>
      </>
    );
  }

  componentDidMount(){
        this.getUsers()
  }

  getUsers = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        this.setState({users:res.data})    
        console.log(res.data)
        })
  }
}
