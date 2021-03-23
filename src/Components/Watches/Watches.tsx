import { Component } from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";

import Header from "../Header/Header";
// import './Electronics.css';


const ProductDetails =[
    { name:"watch" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5Imb5EEwtTz6gMm9iFsi5dvF7Slwc2PXaw&usqp=CAU"},
    { name:"watch" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJ0skU6AgJJIAs21ritYEiSNS3mOptN2fHw&usqp=CAU"},
    { name:"watch" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvs3_wDS2NB9GBd0uy2iuuCXHdUrJeEkWoA&usqp=CAU"},
    { name:"bag" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEW0Nem8ghm3ctSfP9BTSL28wXIbLn23q6Q&usqp=CAU"},
    { name:"shirt" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY2NbQkT6p24UUOwBYxmplKH3L929M77J9A&usqp=CAU"},
    { name:"watch" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJ0skU6AgJJIAs21ritYEiSNS3mOptN2fHw&usqp=CAU"},
    { name:"spectacles" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWzEP9YGkhh3UKYmO1AIa5fnQOUyHEaGU9g&usqp=CAU"},
    { name:"bag" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QYPKzI-omwm9pli2qAFSI5iFy9aLpLL0ag&usqp=CAU"}
  
]
class Watches extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Watches</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {ProductDetails.map((product,index)=> (<Product key={index} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'watches'}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default Watches;