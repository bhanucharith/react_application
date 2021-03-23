import { RouteComponentProps } from "react-router";
import React from 'react';
import Header from "../Header/Header";

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
            price: queryParams.get("price"),
        }
        this.state={routeParams:routeParams,queryParams:queryValues};
    }
     render(){
       
        return(
            <div>
                <Header/>
                
                <p>product full details{this.state.routeParams.category} {this.state.queryParams.name} {this.state.queryParams.price}</p>
            </div>
        );
    
     }
}

export default ProductFullDetails; 