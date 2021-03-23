import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/reducers";
import CartItems from "../CartItems/CartItem";
import Header from "../Header/Header";

const mapStateToProps = (reduxStates: RootState) => {
    return ({
      products: reduxStates.product.productsInWishlist,
    })
  }
  const connector = connect(mapStateToProps);
  interface IProp extends ConnectedProps<typeof connector> {}
class Wishlist extends Component<IProp>{

    
    totalValue(){
     let total = 0;
     for(let i=0;i<this.props.products.length;i++)
     {
       total+=this.props.products[i].price;
     }
      return total;
    }
    render(){

        return(
            <div>
                
            <Header/>
            <h3 className="categories-heading">Wishlist</h3>
            <div className="body">
            <div className="cart-details">
            <h3>No of products in wishlist : {this.props.products.length}</h3>
            <h3>TOTAL wishlist Value : ${this.totalValue()}</h3>
            </div>
            <div className="specific-products">
               
            <div className="product">
                {/* <p>{this.props.products[0].name}</p> */}
             {this.props.products.map((product)=> (<CartItems name={product.name} price={product.price} offervalue={product.offervalue} url={product.image} cart={false}/>))}
             </div>
            </div>
            </div>
            </div>
           
        );
    }
}

export default connector(Wishlist);