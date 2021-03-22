
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";


const ProductDetails =[
    { name:"toys" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0II4D7PCLRmaTjFPCR9hRGH5KrTb6szTOuQ&usqp=CAU"},
    { name:"Toys" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IzbtAuIjwALPMDAeBSllaWHtn3OCXtGqJQ&usqp=CAU"},
    { name:"kids wear" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35HA3tXOO278a0LtzVx5nBrE5pq7HRU1VWA&usqp=CAU"},
    { name:"kids wear" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGrP-81XtC1vHEulGm88keKZlctXeLZU_Yg&usqp=CAU"},
    { name:"Kids wear" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGq4NVZ9lHCrGGv3oBHaCUCbZhK02p0_PFA&usqp=CAU"},
    { name:"Cycle" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHRzT6nRFROSFkPqhCMKQO-KTGlahUHltUQ&usqp=CAU"},
    { name:"kids wear" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGrP-81XtC1vHEulGm88keKZlctXeLZU_Yg&usqp=CAU"},
    { name:"Toys" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_uVzLx2S8zE7O5xaRc-cdvht9SGiq87Cuvw&usqp=CAU"}
  
]
class Kids extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Kids</h3>
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

export default Kids;