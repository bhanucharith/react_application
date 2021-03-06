import { IproductItem } from "./product.reducer";
import {ADD_TO_CART, ADD_TO_CHECKOUT, ADD_TO_WISHLIST,ProductType, REMOVE_FROM_CART,REMOVE_FROM_WISHLIST} from "./product.types";

export const addToCart =(item: IproductItem): ProductType => {
    return {
        type: ADD_TO_CART,
        productItem:item,
    }
}
export const addToCheckout =(item: IproductItem[]): ProductType => {
    return {
        type: ADD_TO_CHECKOUT,
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

export const removeFromWishlist =(item: IproductItem): ProductType => {
    return {
        type: REMOVE_FROM_WISHLIST,
        productItem:item,
    }
}