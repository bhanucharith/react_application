
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";
import { todaysoffer } from "../../productdetails";



class TodayOffer extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Todays Offers</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {todaysoffer.map((product,index)=> (<Product key={index} id={product.id} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'todaysoffer'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default TodayOffer;