import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { RootState } from '../../store/reducers';
import './Header.css';
// import Electronics from '../Electronics/Electronics';
const mapStateToProps = (reduxStates: RootState) => {
  return ({
    products: reduxStates.product.productsInCart,
  })
}
const connector = connect(mapStateToProps);
// interface IProp extends ConnectedProps<typeof connector> {}
interface Iprops extends RouteComponentProps,ConnectedProps<typeof connector>{

}
class Header  extends Component<Iprops> {
  totalValue(){
    let total = 0;
    for(let i=0;i<this.props.products.length;i++)
    {
      total+=this.props.products[i].price;
    }
     return total;
   }
   
    
    render() { 
        return ( 
          
        <header className="main-header">
        <nav className="top-nav">
          <li>USD</li>
          <li>English</li>
          <li><i className="fa fa-user"></i> My Account</li>
          <li onClick={()=>this.props.history.push("/wishlist")} ><i className="fa fa-heart"></i> Wishlist</li>
          <li onClick={()=>this.props.history.push("/mycart")}><i className="fa fa-shopping-cart"></i> My cart</li>
          <li><i className="fa fa-check"></i> Checkout</li>
          <li onClick={()=>this.props.history.push("/login")}><i className="fa fa-lock"></i> Login</li>
        </nav>
        <div className="title">
            <h1><i>Flipmart</i></h1>
            <div className="searchBox">
              <button className="categories">Categories</button>
              <input type="text" placeholder="Search here..."></input>
              <button  type="submit" className="search"><i className="fa fa-search"></i></button>
            </div>
            <div className="cart-value" onClick={()=>this.props.history.push("/mycart")}>
              <small className="cart-logo">
                  <i className="fa fa-shopping-cart"></i>
                  <small className="cart-items-count">{this.props.products.length}</small>
              </small>
              <small className="value">CART - ${this.totalValue()}</small>
            </div>
        </div>
        <nav className="main-nav">
          
          <li onClick={()=>this.props.history.push("/")}>HOME</li>
          <li onClick={()=>this.props.history.push("/electronics")}>ELECTRONICS</li>
          <li onClick={()=>this.props.history.push("/clothing")}>CLOTHING</li>
          <li onClick={()=>this.props.history.push("/healthandbeauty")}>HEALTH & BEAUTY</li>
          <li onClick={()=>this.props.history.push("/watches")}>WATHCES</li>
          <li onClick={()=>this.props.history.push("/jwellery")}>JWELLERY</li>
          <li onClick={()=>this.props.history.push("/footware")}>FOOWARE</li>
          <li onClick={()=>this.props.history.push("/kids")}>KIDS</li>
          <li onClick={()=>this.props.history.push("/sports")}>SPORTS</li>
          <li onClick={()=>this.props.history.push("/todaysoffer")} className="today-offer">TODAYS OFFER</li>
        </nav>

        
        </header>
        
       );
    }
}
 
export default connector(withRouter(Header));