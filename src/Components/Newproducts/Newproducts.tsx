// import axios from 'axios';
import React, { Component } from 'react';
import Product from '../Product/Product';
import './Newproducts.css';
const ProductDetails =[[
  { name:"shirt" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-spAiTs6GWb7lt5tgrBvMfhycpClujOeDw&usqp=CAU"},
  { name:"watch" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJ0skU6AgJJIAs21ritYEiSNS3mOptN2fHw&usqp=CAU"},
  { name:"spectacles" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeNi3xro7QSXrfsYuEtwnPlNN0XNifh62-Q&usqp=CAU"},
  { name:"bag" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjKCwr9gfdkVsOTre7mJNRuPRDBn1OboH8g&usqp=CAU"}
],
[
  { name:"vivo mobile" , price:500, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycOPamgTRf0uHoJJpnWhCq8fkEvIdwmYkog&usqp=CAU"},
  { name:"watch" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknYyTZhAnMHp7e9vtHIS2nnqc-pzTBrrZSA&usqp=CAU"},
  { name:"spectacles" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeNi3xro7QSXrfsYuEtwnPlNN0XNifh62-Q&usqp=CAU"},
  { name:"bag" , price:150, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjKCwr9gfdkVsOTre7mJNRuPRDBn1OboH8g&usqp=CAU"}
],
[
  { name:"..shirt" , price:200, offervalue:"20%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-spAiTs6GWb7lt5tgrBvMfhycpClujOeDw&usqp=CAU"},
  { name:"oppo mobile" , price:400, offervalue:"25%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1CyjhtWdmI7ReM0oyL456MjTtwQBe7atBA&usqp=CAU"},
  { name:"spectacles" , price:100, offervalue:"40%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeNi3xro7QSXrfsYuEtwnPlNN0XNifh62-Q&usqp=CAU"},
  { name:"watch" , price:450, offervalue:"30%", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-1dcetH0LBxLckChgFBa90YMgUDKmetChA&usqp=CAU"}
]
]
interface prod{
  // id:number;
  // title:string;
  // price:number;
  // category:string;
  // description:string;
  // image:string;
  userId:number;
  id:number;
  title:string;
  completed:string;
}

interface Istate{
  pageno:number;
   productsarray:prod[];
}
interface Iprop{
}
// const api = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/todos/',
// })

class Newproducts  extends Component<Iprop,Istate>{
  


    // constructor(props:Iprop){
    //   super(props);
    //   api.get('/').then(res=>{
    //     this.setState({productsarray:res.data});

        
    //     // console.log(this.state.productsarray);
    //     // console.log(res.data[1].title);
    //   })

    // }
    public state: Istate={
      pageno:0,
     productsarray:[],
    }
    incrementPage =()=>{
      if(this.state.pageno<2)
      this.setState({pageno: this.state.pageno+1});
      
    }
    decrementPage =()=>{
      if(this.state.pageno>0)
      this.setState({pageno: this.state.pageno-1});
      
    }
    render() { 
     
        return ( 
        <div className="newproducts">
         <div className="newproducts-title">
          <h4 className="newproducts-heading">New Products</h4>
          <div className="types">
          <li>All</li>
          <li>Clothing</li>
          <li>Electronics</li>
          <li>shoes</li>
        </div>
        <div className="scroll-left-right">
        <small>page {this.state.pageno+1} of 3 </small>
        <i onClick={this.decrementPage} className="fa fa-angle-left"></i>
        <i onClick={this.incrementPage} className="fa fa-angle-right"></i>
        </div>
      </div>

      
        <div className="product">
        
        {ProductDetails[this.state.pageno].map((product,index)=> (<Product key={index} name={product.name} price={product.price} offervalue={product.offervalue} url={product.url}/>))}
         {/* <p>{productsarray}</p> */}
         {/* {productsarray.map((product,index)=> (<Product key={index} name={product.title} price={product.price} offervalue={product.offervalue} url={product.url}/>))} */}
          {/* {console.log(this.state.productsarray[0])} */}
          {/* {console.log(this.state.productsarray[1].title)} */}


        </div>
        
        

    </div>
       );
    }
}
 
export default Newproducts;