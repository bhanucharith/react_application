import { IproductItem } from "./product.reducer";
import {ADD_TO_CART, ADD_TO_WISHLIST,ProductType, REMOVE_FROM_CART} from "./product.types";

export const addToCart =(item: IproductItem): ProductType => {
    return {
        type: ADD_TO_CART,
        productItem:item,
    }
}
export const addToWishlist =(item: IproductItem): ProductType => {
    return {
        type: ADD_TO_WISHLIST,
        productItem:item,
    }
}
export const removeFromCart =(item: IproductItem): ProductType => {
    return {
        type: REMOVE_FROM_CART,
        productItem:item,
    }
}