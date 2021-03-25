// import axios from "axios";
import React, { Component } from "react";
import { electronics } from "../../productdetails";
import { Get_all_products, Get_product_by_id } from "../../Services/service";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import Product from "../Product/Product";
import './Electronics.css';



interface Iprop{

}
interface prod{
    id:number;
    title:string;
    price:number;
    discription:string;
    category:string;
    image:string;
}
interface Istate{
    productsData:prod[];
}

class Electronics extends Component<Iprop,Istate>{

    public state:Istate={
        
        productsData:[],
    }
    componentDidMount(){
        console.log("In Component did mount");
        try{
            Get_all_products().then((res)=>{
           this.setState({productsData:res.data});
           console.log(this.state.productsData);
        });
        }
        catch(error){
            console.log("error",error);
        }
    }
    getProduct =(id:number)=>{
        try{
            Get_product_by_id(id).then((res)=>{
           this.setState({productsData:res.data});
           console.log(this.state.productsData);
        });
        }
        catch(error){
            console.log("error",error);
        }
    }
   
    
    render(){
       
        return(
            
            <div >
                
            <Header/>
            <h3 className="categories-heading">Electronics</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {electronics.map((product,index)=> (<Product key={index} id={product.id} name={product.name}  price={product.price} offervalue={product.offervalue} url={product.url} category={'electronics'}/>))}
             </div>
            
            
            </div>
            </div>
            </div>
           
        );
    }
}

export default Electronics;