import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/reducers";
import CartItems from "../CartItems/CartItem";
import Header from "../Header/Header";
// import './Mycart.css';

const mapStateToProps = (reduxStates: RootState) => {
    return ({
      products: reduxStates.product.productsInCheckout,
    })
  }
const connector = connect(mapStateToProps);
interface IProp extends ConnectedProps<typeof connector> {}
class Checkout extends Component<IProp>{

   
    totalValue(){
     let total = 0;
     for(let i=0;i<this.props.products.length;i++)
     {
       total+=this.props.products[i].price * this.props.products[i].quantity;
     }
      return total;
    }
    render(){
        
        let emptyStatement;
        if(this.props.products.length===0){
          emptyStatement=<p> No products purchased</p>;
        }
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Checkout</h3>
            <div className="body">
            <div className="cart-details">
            <h3>No of products purchased : {this.props.products.length}</h3>
            <h3>TOTAL purchase Value : ${this.totalValue()}</h3>
            </div>
            <div className="specific-products">
               
            <div className="product">
                {emptyStatement}
             {this.props.products.map((product,index)=> (<CartItems key={index} id={product.id} name={product.name} price={product.price} offervalue={product.offervalue} url={product.image} place={'checkout'} quantity={product.quantity} />))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default connector(Checkout);