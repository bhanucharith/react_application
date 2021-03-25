
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";
import { clothing } from "../../productdetails";



class Clothing extends Component{
    render(){
        return(
            <div >
                
            <Header/>
            <h3 className="categories-heading">Clothing</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {clothing.map((product,index)=> (<Product id={product.id} key={index}  name={product.name} price={product.price} offervalue={product.offervalue} url={product.url}  category={'clothing'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default Clothing;