import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import {  RouteComponentProps, withRouter } from "react-router-dom";
import { Dispatch } from "redux";
import { addToCart ,addToWishlist} from "../../store/product/product.action";
import { IproductItem } from "../../store/product/product.reducer";
import "./Product.css";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    productsInCart: (item: IproductItem) => dispatch(addToCart(item)),
    ProductsInWishlist: (item:IproductItem)=> dispatch(addToWishlist(item)),
  };
};

const connector = connect(null, mapDispatchToProps);
interface props extends RouteComponentProps,ConnectedProps<typeof connector> {
  name: string;
  offervalue: string;
  price: number;
  url: string;
  category:string;
}
interface IState {
  productsInCart: number;
}

class Product extends Component<props, IState> {
  public state: IState = {
    productsInCart: 0,
  };
  // onClick={()=>this.props.history.push(`/productfulldetails/${this.props.name}/${this.props.price}/`)}
  sendDetails =()=>{
    // ProductFullDetails(this.props.offervalue);
    // this.props.history.push(`/productfulldetails/${this.props.name}/${this.props.price}/`)
    // ProductFullDetails(this.props.name,this.props.price);
    this.props.history.push({pathname: `/productfulldetails/${this.props.category}`, search:`?name=${this.props.name}&price=${this.props.price}`});
    // <Link to={`/productfulldetails/${this.props.name}`}></Link>
  }
  render() {
    return (
      <div className="item">
        <div
          className="image" onClick={this.sendDetails}
          style={{ backgroundImage: `url(${this.props.url})` }}
        >
          <p className="offervalue">
            {this.props.offervalue}
            <br></br>OFF
          </p>
        </div>
        <h4 className="item-name">{this.props.name} 
          
        </h4>
        
        <div className="review-star">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <p className="price">${this.props.price}</p>
        <small className="add-to-cart"
          onClick={() =>
            this.props.productsInCart({
              name: this.props.name,
              price: this.props.price,
              offervalue: this.props.offervalue,
              image: this.props.url,
            })
          }
        >
          ADD to Cart
        </small>
        <small className="add-to-cart"
          onClick={() =>
            this.props.ProductsInWishlist({
              name: this.props.name,
              price: this.props.price,
              offervalue: this.props.offervalue,
              image: this.props.url,
            })
          }
        >
          ADD to Wishlist
        </small>
      </div>
    );
  }
}

export default connector(withRouter(Product));
