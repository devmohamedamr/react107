import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
export default function Products() {
    let [data, setData] = useState([])
    useEffect(() => {
        getProduct()
    }, [])
    function getProduct() {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setData(res.data)
        })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {data.map((pro) =>
                        <div className="card col-md-3">
                            <img src={pro.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{pro.title}</h5>
                                <p className="card-text">{pro.price}</p>
                               <Link className="btn btn-primary" to={'/singleproduct/'+pro.id}>go</Link>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
