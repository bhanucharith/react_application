
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";


const ProductDetails =[
    { name:"jwellery" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRli5oeOa_wnWRxV2CBH9VwCn3UuAgn0yDUxw&usqp=CAU"},
    { name:"jwellery" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaOSPqcWN8NXafMRFUqKCI8zEW1FRu7JiVQ&usqp=CAU"},
    { name:"jwellery" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHThVqtCkOczKSrXaGuZJsLIVwABdMbOOOBQ&usqp=CAU"},
    { name:"jwellery" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCqI4KjlWw8pxGN2jdw2SmIX_M2G8ltvfww&usqp=CAU    "},
    { name:"jwellery" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHIj98_NlviUbD3t-Kplap10OwphVhUadng&usqp=CAU"},
    { name:"jwellery" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDglPhu6B8wmEw6vE5Bx9vZsCFhuof5v-TWA&usqp=CAU    "},
    { name:"jwellery" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcgSHfdIZvEmYSU1ci84IQR2WEn-Pem9lBw&usqp=CAU"},
    { name:"jwellery" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW7HFjT5S424KNJt7IH-m7waaAPlLcOYYlA&usqp=CAU"},
  
]
class Jwellery extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Jwellery</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {ProductDetails.map((product,index)=> (<Product key={index} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default Jwellery;