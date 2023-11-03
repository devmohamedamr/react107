import axios from 'axios'
import { useState } from 'react'
import './home.css'
export default function Home() {
    let [users,setUsers] = useState([])
  return (
        <>
            <button className='btn' onClick={getUsers}>click</button>
            <ul>
                {users.map((user)=> <li key={user.id}>{user.name}</li> )}
            </ul>
        </>
  )

  function getUsers(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        })
  }
}
