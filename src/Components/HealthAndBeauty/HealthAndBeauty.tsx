
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";


const ProductDetails =[
    { name:"Beauty products" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6GB3PUtwJjN5wM-Gm9267Bfy9kBnMXjuFQ&usqp=CAU"},
    { name:"health care" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCWXE2tqVvWQ9E3nSDTwcjRXEV75ot7hjoQ&usqp=CAU"},
    { name:"health care" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCWXE2tqVvWQ9E3nSDTwcjRXEV75ot7hjoQ&usqp=CAU"},
    { name:"health care" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCWXE2tqVvWQ9E3nSDTwcjRXEV75ot7hjoQ&usqp=CAU"},
    { name:"Beauty products" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6GB3PUtwJjN5wM-Gm9267Bfy9kBnMXjuFQ&usqp=CAU"},
    { name:"health care" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCWXE2tqVvWQ9E3nSDTwcjRXEV75ot7hjoQ&usqp=CAU"},
    { name:"Beauty products" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6GB3PUtwJjN5wM-Gm9267Bfy9kBnMXjuFQ&usqp=CAU"},
    { name:"health care" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCWXE2tqVvWQ9E3nSDTwcjRXEV75ot7hjoQ&usqp=CAU"},
  
]
class HealthAndBeauty extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Health And Beauty</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {ProductDetails.map((product,index)=> (<Product key={index} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'healthandbeauty'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default HealthAndBeauty;