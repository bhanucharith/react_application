
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";
import { sports } from "../../productdetails";


class Sports extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Sports</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {sports.map((product,index)=> (<Product key={index} id={product.id} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'sports'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default Sports;