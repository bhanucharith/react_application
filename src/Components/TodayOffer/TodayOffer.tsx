
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";


const ProductDetails =[
    { name:"shirt" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-spAiTs6GWb7lt5tgrBvMfhycpClujOeDw&usqp=CAU"},
    { name:"kids wear" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGrP-81XtC1vHEulGm88keKZlctXeLZU_Yg&usqp=CAU"},
    { name:"jwellery" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDglPhu6B8wmEw6vE5Bx9vZsCFhuof5v-TWA&usqp=CAU    "},
    { name:"Rubics cube" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k43193TUjvSErkmRixPP1T_HQIleDrIOTg&usqp=CAU"},
    { name:"snake & ladder" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtykeGssO5cEzjK9ZX6A-Xr7UM3j90O0VyA&usqp=CAU"},
    { name:"watch" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJ0skU6AgJJIAs21ritYEiSNS3mOptN2fHw&usqp=CAU"},
    { name:"Laptop" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQopq1otcO710G0ghmH-qvbjVL0q4rzgXAYw&usqp=CAU"},

]
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
             {ProductDetails.map((product,index)=> (<Product key={index} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'todaysoffer'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default TodayOffer;