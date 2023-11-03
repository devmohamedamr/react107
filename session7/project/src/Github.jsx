import React, { useState } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
export default function Github() {
    let {register,handleSubmit,formState:{errors}} = useForm()
    let [user,setUser] = useState([])
  return (
    <>
        <form onSubmit={handleSubmit(getUser)}>
            <input type="text" placeholder='username' {...register('username',{required:true})} />
            {errors.username && <span>username is required</span>}
            <input type="submit" />
        </form>

        <img src={user.avatar_url} alt="" />
        <h1>{user.name}</h1>
    </>
  )

  function getUser(res){
    axios.get(`https://api.github.com/users/${res.username}`).then((res)=>{
        console.log(res.data)
        setUser(res.data)
    })
  }
}
