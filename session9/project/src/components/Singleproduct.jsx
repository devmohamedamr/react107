import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect ,useState } from 'react'
export default function Singleproduct() {
    let {id} = useParams()
    let [product,setProduct] = useState([])
    useEffect(()=>{
        getProduct(id)
    },[])
    function getProduct(id){
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setProduct(res.data)
        })
    }
  return (
    <>
        <h1>Singleproduct {id}</h1>
        <h2>{product.title}</h2>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>
        <img src={product.image} />
    </>
  )
}
