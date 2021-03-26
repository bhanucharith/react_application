import { RouteComponentProps } from "react-router";
import React from 'react';
import Header from "../Header/Header";
import "./ProductFullDetails.css"
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
   
     render(){
      
        return(
            <div>
                <Header/>
                
                <p>product full details{this.state.routeParams.category} {this.state.queryParams.name} {this.state.queryParams.id}</p>
                
                {/* <p>{this.proDetails()}</p> */}

            </div>
        );
    
     }
}

export default ProductFullDetails; 