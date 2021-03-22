import { IproductItem } from "./product.reducer";

export const ADD_TO_CART ="ADD_TO_CART";
export const ADD_TO_WISHLIST ="ADD_TO_WISHLIST";
export const REMOVE_FROM_CART ="REMOVE_FROM_CART";
interface IAddToCart{
    type : typeof ADD_TO_CART;
    productItem: IproductItem;
}
interface IAddToWishlist{
    type : typeof ADD_TO_WISHLIST;
    productItem: IproductItem;
}
interface IRemoveFromCart{
    type : typeof REMOVE_FROM_CART;
    productItem: IproductItem;
}
export type ProductType=IAddToCart | IRemoveFromCart| IAddToWishlist;