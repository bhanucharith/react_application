import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { removeFromCart, removeFromWishlist } from "../../store/product/product.action";
import { IproductItem } from "../../store/product/product.reducer";

import './CartItems.css';
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      productsInCart: (item: IproductItem) => dispatch(removeFromCart(item)),
      productsInWishlist: (item: IproductItem) => dispatch(removeFromWishlist(item)),
    };
  };
  
const connector = connect(null, mapDispatchToProps);
interface props extends ConnectedProps<typeof connector> {
    id:number;
    name: string;
    offervalue: string;
    price: number;
    url: string;
    quantity:number;
    cart:boolean;
}
class CartItems extends Component<props>{
    select = ()=>{
       if(this.props.cart){
        this.props.productsInCart({
            id: this.props.id,
            name: this.props.name,
            price: this.props.price,
            offervalue: this.props.offervalue,
            image: this.props.url,
            quantity:1,
            })
         
       }
       else{
        this.props.productsInWishlist({
            id: this.props.id,
            name: this.props.name,
            price: this.props.price,
            offervalue: this.props.offervalue,
            image: this.props.url,
            quantity: 1,
            })
       }
    }

    render(){
        let quantity;
        if(this.props.cart)
        quantity = <p>{`quantity=${this.props.quantity}`}</p>;
        return(
             <div className="cartItem-container">
                 <div className="item-image" style={{  backgroundImage: `url(${this.props.url})` }}></div>
                 <div className="item-details">
                     <h3>{this.props.name}</h3>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                     </div>
                     <p>${this.props.price} </p>
                     
                     {quantity}
                     <button onClick={ this.select}
                        className="remove-button">
                            Remove</button>
                 </div>
             </div>
        );
    }
}

export default connector(CartItems);