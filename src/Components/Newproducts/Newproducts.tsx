// import axios from 'axios';
import React, { Component } from 'react';
import { newProducts } from '../../productdetails';
import Product from '../Product/Product';
import './Newproducts.css';


interface Istate{
  pageno:number;
  //  productsarray:prod[];
}
interface Iprop{
}
// const api = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/todos/',
// })

class Newproducts  extends Component<Iprop,Istate>{
  


    // constructor(props:Iprop){
    //   super(props);
    //   api.get('/').then(res=>{
    //     this.setState({productsarray:res.data});

        
       
    //   })

    // }
    public state: Istate={
      pageno:0,
    // productsarray:[],
    }
    incrementPage =()=>{
      if(this.state.pageno<2)
      this.setState({pageno: this.state.pageno+1});
      
    }
    decrementPage =()=>{
      if(this.state.pageno>0)
      this.setState({pageno: this.state.pageno-1});
      
    }
    render() { 
     
        return ( 
        <div className="newproducts">
         <div className="newproducts-title">
          <h4 className="newproducts-heading">New Products</h4>
          <div className="types">
          <li>All</li>
          <li>Clothing</li>
          <li>Electronics</li>
          <li>shoes</li>
        </div>
        <div className="scroll-left-right">
        <small>page {this.state.pageno+1} of 3 </small>
        <i onClick={this.decrementPage} className="fa fa-angle-left"></i>
        <i onClick={this.incrementPage} className="fa fa-angle-right"></i>
        </div>
      </div>

      
        <div className="product">
        
        {newProducts[this.state.pageno].map((product,index)=> (<Product key={index} id={product.id} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={product.category}/>))}
         {/* <p>{productsarray}</p> */}
         {/* {productsarray.map((product,index)=> (<Product key={index} name={product.title} price={product.price} offervalue={product.offervalue} url={product.url}/>))} */}
          {/* {console.log(this.state.productsarray[0])} */}
          {/* {console.log(this.state.productsarray[1].title)} */}


        </div>
        
        

    </div>
       );
    }
}
 
export default Newproducts;