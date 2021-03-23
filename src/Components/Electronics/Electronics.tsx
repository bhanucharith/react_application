import axios from "axios";
import React, { Component } from "react";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import Product from "../Product/Product";
import './Electronics.css';



const ProductDetails =[
    { name:"TV" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREG5zAFCBI4eTqd1bQ8WyIwF14-MfjBJk2A&usqp=CAU"},
    { name:"watch" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJ0skU6AgJJIAs21ritYEiSNS3mOptN2fHw&usqp=CAU"},
    { name:"Ear phones" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZ6rlzYauw1NdJyK2bZLhM9MMW8K0UFXoDQ&usqp=CAU"},
    { name:"Ear pods" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjp6jkZcm_GqZBqqxA0i5cgFMNQDbxZgg_CQ&usqp=CAU"},
    { name:"Fridge" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWatsAnUS0vMqbYJSCSGZ_VyyJK5woFrBXw&usqp=CAU"},
    { name:"watch" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJ0skU6AgJJIAs21ritYEiSNS3mOptN2fHw&usqp=CAU"},
    { name:"Laptop" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQopq1otcO710G0ghmH-qvbjVL0q4rzgXAYw&usqp=CAU"},
    { name:"smartphone" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BxqqkmMaKwrGs7_bhui7U_SOE2xEc_cL0w&usqp=CAU"}
  
]

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
const api =axios.create({
    baseURL:"https://fakestoreapi.herokuapp.com/products/"
})

class Electronics extends Component<Iprop,Istate>{

    constructor(props:Iprop){
        super(props);
        api.get('/').then(res=>{
            console.log(res.data);
            this.setState({productsData:res.data});
            console.log(this.state.productsData[0]);
            
        })

    }
    public state:Istate={
        // productsData:{} as prod,
        productsData:[],
    }
    createproduct = async ()=>{
       api.post('/',{id:100,title:"test",description:"sample"});
    
    }
    fetchproducts =()=>{
        console.log("form fetch products");
        api.get('/').then(res=>{
            console.log(res.data);
        })
    }
    render(){
        // this.createproduct();
        // this.fetchproducts();
        return(
            
            <div>
                {/* <Route path='/electronics' exact component={Electronics}/> */}
            <Header/>
            <h3 className="categories-heading">Electronics</h3>
            <div className="body">
            
            <Categories/>
            
            <div className="specific-products">
               
            <div className="product">
             {ProductDetails.map((product,index)=> (<Product key={index} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url} category={'electronics'}/>))}
             </div>
            
             {/* <p>{this.state.productsData.image}</p> */}
             {/* <Product  name={this.state.productsData.title} price={this.state.productsData.price} offervalue={this.state.productsData.discription} url={this.state.productsData.image}/> */}
            </div>
            </div>
            </div>
           
        );
    }
}

export default Electronics;