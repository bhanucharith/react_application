
import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";


const ProductDetails =[
    { name:"shirt" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-spAiTs6GWb7lt5tgrBvMfhycpClujOeDw&usqp=CAU"},
    { name:"tshirt" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTPlGDQL7Oz1TQbXuIudoR-Z_ev0v27_hbw&usqp=CAU"},
    { name:"pant" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYihm9JLfrW4JFN6GibagcuVi2FhumjRRcjg&usqp=CAU"},
    { name:"shirt" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDX7Nt4LAyL2rJhFCAcS6ss54sQhZVMcB0w&usqp=CAU"},
    { name:"shirt" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-spAiTs6GWb7lt5tgrBvMfhycpClujOeDw&usqp=CAU"},
    { name:"blue shirt" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQqp3CkTrevELFvAF1zEehiWa_15OLcgckw&usqp=CAU"},
    { name:"white shirt" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7voAAwHrPNv2o1oB_0YS3lGljPHNPVPey8w&usqp=CAU"},
    { name:"Tshirt" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0sPkk1qJjM116RdnAoQZ9kMp7q3zlxtZUQ&usqp=CAU"}
  
]
class Clothing extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Clothing</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {ProductDetails.map((product,index)=> (<Product key={index} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'clothing'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default Clothing;