import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";
import { footware } from "../../productdetails";
// import './Electronics.css';



class Footware extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Footware</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {footware.map((product,index)=> (<Product key={index} id={product.id} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'footware'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default Footware;