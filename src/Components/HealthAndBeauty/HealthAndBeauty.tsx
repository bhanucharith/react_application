
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";
import { healthAndBeauty } from "../../productdetails";

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
             {healthAndBeauty.map((product,index)=> (<Product key={index} id={product.id} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'healthandbeauty'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default HealthAndBeauty;