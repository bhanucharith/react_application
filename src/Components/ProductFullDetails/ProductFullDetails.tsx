// import { Component } from "react";
// import { RouteComponentProps } from "react-router";
import Header from "../Header/Header";
// interface Iprops extends RouteComponentProps{
//     name:string;
//     price:number;
// }
export const ProductFullDetails = (name:string,price:number)=>{
   
    // render(){
        // const productname=this.props.match.params;
        return(
            <div>
                <Header/>
                
                <p>product full details</p>
            </div>
        );
    
    // }
}

export default ProductFullDetails; 