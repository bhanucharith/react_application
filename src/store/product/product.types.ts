import { IproductItem } from "./product.reducer";

export const ADD_TO_CART ="ADD_TO_CART";
export const ADD_TO_WISHLIST ="ADD_TO_WISHLIST";
export const ADD_TO_CHECKOUT ="ADD_TO_CHECKOUT";
export const REMOVE_FROM_CART ="REMOVE_FROM_CART";
export const REMOVE_FROM_WISHLIST ="REMOVE_FROM_WISHLIST";
interface IAddToCart{
    type : typeof ADD_TO_CART;
    productItem: IproductItem;
}
interface IAddToWishlist{
    type : typeof ADD_TO_WISHLIST;
    productItem: IproductItem;
}
interface IAddToCheckout{
    type : typeof ADD_TO_CHECKOUT;
    productItem: IproductItem[];
}
interface IRemoveFromCart{
    type : typeof REMOVE_FROM_CART;
    productItem: IproductItem;
}
interface IRemoveFromWishlist{
    type : typeof REMOVE_FROM_WISHLIST;
    productItem: IproductItem;
}
export type ProductType=IAddToCart | IRemoveFromCart| IAddToWishlist| IRemoveFromWishlist | IAddToCheckout;