import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { addToCart, removeFromCart, removeFromWishlist } from "../../store/product/product.action";
import { IproductItem } from "../../store/product/product.reducer";

import './CartItems.css';
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      productsInCart: (item: IproductItem) => dispatch(removeFromCart(item)),
      productsInWishlist: (item: IproductItem) => dispatch(removeFromWishlist(item)),
      Increasequantity: (item: IproductItem) => dispatch(addToCart(item)),
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
    place:string;
}
class CartItems extends Component<props>{
    select = ()=>{
       if(this.props.place==='cart'){
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
    quantity = (add:boolean)=>{
        let qua=-1;
        if(add)
        qua=1
        if(this.props.place==='cart' && this.props.quantity>=1){
         this.props.Increasequantity({
             id: this.props.id,
             name: this.props.name,
             price: this.props.price,
             offervalue: this.props.offervalue,
             image: this.props.url,
             quantity:qua,
             })
          
        }
        if(this.props.quantity===1 && !add){
            this.props.productsInCart({
                id: this.props.id,
                name: this.props.name,
                price: this.props.price,
                offervalue: this.props.offervalue,
                image: this.props.url,
                quantity:0,
                })
             
           }
     }
    render(){
        let quantity;
        if(this.props.place==='cart')
        quantity = <p><small className="minus" onClick={()=>this.quantity(false)}><i className="fa fa-minus-square"></i></small>
                    {`quantity=${this.props.quantity}`}
                    <small className="plus" onClick={()=>this.quantity(true)}><i className="fa fa-plus-square"></i></small>
                    </p>;
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
                     {(this.props.place!=='checkout')&&(<button onClick={ this.select}
                        className="remove-button">
                            Remove</button>)}
                 </div>
             </div>
        );
    }
}

export default connector(CartItems);