import React, { Component } from 'react';
import axios from 'axios'
export default class Products extends Component {
    state = {
        productData:[]
    }
  render() {
    return (
      <>
        <div className='container'>
            <div className='row'>
            {this.state.productData.map((product)=>
        
        <div className="card col-md-3" >
        <img className="card-img-top" src={product.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        
        )}
            </div>
        </div>
      </>
    );
  }
  componentDidMount(){
        this.getProducts()
  }
  getProducts = ()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        this.setState({productData:res.data})
    })
  }
}
