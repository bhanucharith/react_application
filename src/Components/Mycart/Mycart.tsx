import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { addToCheckout } from "../../store/product/product.action";
import { IproductItem } from "../../store/product/product.reducer";
import { RootState } from "../../store/reducers";
import CartItems from "../CartItems/CartItem";
import Header from "../Header/Header";
import './Mycart.css';

const mapStateToProps = (reduxStates: RootState) => {
    return ({
      products: reduxStates.product.productsInCart,
    })
  }
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      productsInCheckout: (item: IproductItem[]) => dispatch(addToCheckout(item)),
     
    };
  };
const connector = connect(mapStateToProps,mapDispatchToProps);
interface IProp extends ConnectedProps<typeof connector> {}
class Mycart extends Component<IProp>{

   
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
          emptyStatement=<p> No products In Cart</p>;
        }
        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">My Cart</h3>
            <div className="body">
            <div className="cart-details">
            <h3>No of products in cart : {this.props.products.length}</h3>
            <h3>TOTAL Cart Value : ${this.totalValue()}</h3>
            <button onClick={()=>this.props.productsInCheckout(this.props.products)}>checkout</button>
            </div>
            <div className="specific-products">
               
            <div className="product">
                {emptyStatement}
             {this.props.products.map((product,index)=> (<CartItems key={index} id={product.id} name={product.name} price={product.price} offervalue={product.offervalue} url={product.image} place={'cart'} quantity={product.quantity} />))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default connector(Mycart);