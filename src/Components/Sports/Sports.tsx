
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";


const ProductDetails =[
    { name:"batminton rocket" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXMSwyYUQg4UAAyqoAk7sDmxWbfTzmrOGFA&usqp=CAU"},
    { name:"football" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2jJNDg6FL595Aevkskud3ps4lP9qVNd8bA&usqp=CAU"},
    { name:"vollyball" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdMclXqXWEJRr5UAk2CsQqSmGbwwliJ-Q3g&usqp=CAU"},
    { name:"carrom board" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImWy4Gep7xctmhmO-gcDsMGSqHePydEpwzw&usqp=CAU"},
    { name:"Rubics cube" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k43193TUjvSErkmRixPP1T_HQIleDrIOTg&usqp=CAU"},
    { name:"snake & ladder" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtykeGssO5cEzjK9ZX6A-Xr7UM3j90O0VyA&usqp=CAU"},
    { name:"cricket bat" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51456Rp2fhmpq1-D3AEeKCrx9V0s2hYT75g&usqp=CAU"},
    { name:"cricket kit" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVHs8TKw_XPohFogpsT-96VErD2tgrHe9zw&usqp=CAU"}
  
]
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
             {ProductDetails.map((product,index)=> (<Product key={index} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default Sports;