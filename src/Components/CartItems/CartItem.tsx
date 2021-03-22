import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { removeFromCart } from "../../store/product/product.action";
import { IproductItem } from "../../store/product/product.reducer";

import './CartItems.css';
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      productsInCart: (item: IproductItem) => dispatch(removeFromCart(item)),
    };
  };
  
const connector = connect(null, mapDispatchToProps);
interface props extends ConnectedProps<typeof connector> {
    name: string;
    offervalue: string;
    price: number;
    url: string;
}
class CartItems extends Component<props>{

    render(){
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
                     <p>${this.props.price}</p>
                     <button onClick={() =>
                        this.props.productsInCart({
                        name: this.props.name,
                        price: this.props.price,
                        offervalue: this.props.offervalue,
                        image: this.props.url,
                        })
                         }
                        className="remove-button">
                            Remove from cart</button>
                 </div>
             </div>
        );
    }
}

export default connector(CartItems);