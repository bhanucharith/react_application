import { RouteComponentProps } from "react-router";
import React from 'react';
import Header from "../Header/Header";
import "./ProductFullDetails.css"
import { clothing, electronics, footware, healthAndBeauty, jewellery, kids, sports, watches } from "../../productdetails";
interface Iprops extends RouteComponentProps{}
interface Istate {
    routeParams:any;
    queryParams:any;
    
}

class ProductFullDetails extends React.Component<Iprops,Istate>{
   
    constructor(props:Iprops){
        super(props);
        const routeParams:any = props.match.params;
        const queryParams:any = new URLSearchParams(props.location.search);
        const queryValues ={
            name: queryParams.get("name"),
            id: queryParams.get("id"),
        }
        this.state={routeParams:routeParams,queryParams:queryValues};
    }
     Prodetails=()=>{

        let itemarray:any;
        if(this.state.routeParams.category==='electronics'){
           itemarray=electronics;
        }
        else if(this.state.routeParams.category==='clothing'){
            itemarray=clothing;
        }
        else if(this.state.routeParams.category==='watches'){
            itemarray=watches;
        }
        else if(this.state.routeParams.category==='jewellery'){
            itemarray=jewellery;
        }
        else if(this.state.routeParams.category==='sports'){
            itemarray=sports;
        }
        else if(this.state.routeParams.category==='footware'){
            itemarray=footware;
        }
        else if(this.state.routeParams.category==='healthandbeauty'){
            itemarray=healthAndBeauty;
        }
        else if(this.state.routeParams.category==='kids'){
            itemarray=kids;
        }
        let item
            for(let i=0;i<itemarray.length;i++)
            {
                if(itemarray[i].name===this.state.queryParams.name)
                {
                    item=itemarray[i];
                }
            }
            console.log(item.name);
        const fulldetails=<div className="product-container">
               <div className="product-image" style={{ backgroundImage: `url(${item.url})` }}></div>
               <div className="product-details">
                   <h3>{item.name}</h3>
                   <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quaerat voluptatem! Assumenda aut odio officia nihil dolores. Maxime praesentium dolor aut quam necessitatibus voluptas, harum quo error vero adipisci. Aliquid?</p>
                   <div className="review-star">
                   <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                     <i className="fa fa-star-o"></i>
                    </div>
                   <small>{item.offervalue}</small>
                   <p className="product-price">${item.price}</p>

               </div>
        </div>
        return fulldetails;
    }
     render(){
        // let Prodetails=()=>{
        //       return <h2>hhh</h2>
        // }
       
        return(
            <div>
                <Header/>
                
                {/* <p>product full details{this.state.routeParams.category} {this.state.queryParams.name} {this.state.queryParams.id}</p> */}
                <this.Prodetails/>
             
            </div>
        );
    
     }
}

export default ProductFullDetails; 