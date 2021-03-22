import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";
// import './Electronics.css';


const ProductDetails =[
    { name:"shoe" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsj4esS7rU9LJ15NBEZGrrVI5EtkPTOCX-HQ&usqp=CAU"},
    { name:"shoe" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YDuj9nZFL15z_i7mtJ1oJKtC_RxLqbJiCg&usqp=CAU"},
    { name:"shoe" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQoEeXhCKts9hKI8ubltumgD3LAbFfLqq5w&usqp=CAU"},
    { name:"shoe" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNW4QDMn7r6skOPDVBWpzn1mP3wEHNcwXCAw&usqp=CAU"},
    { name:"shoe" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgb_tIHqHW4NRHgo7DaRS_cbRYNkjZKxQiHA&usqp=CAU"},
    { name:"shoe" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZp1V61rSAeLSK_tHq7dedTMo0PD8MJ8h0iA&usqp=CAU"},
    { name:"loafers" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDj9m0nriYfD0aiS2RmEtdWBfamAklC-uxSg&usqp=CAU"},
    { name:"shoe" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-Mi5u8f-LnCE8OsDThczRNxWanEcV_YPVA&usqp=CAU"}
  
]
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
             {ProductDetails.map((product,index)=> (<Product key={index} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default Footware;