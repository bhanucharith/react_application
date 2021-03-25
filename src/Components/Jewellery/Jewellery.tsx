
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";
import { jewellery } from "../../productdetails";



class Jewellery extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Jewellery</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {jewellery.map((product,index)=> (<Product key={index} id={product.id}  name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'jewllery'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default Jewellery;