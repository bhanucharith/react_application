import {ProductType,ADD_TO_WISHLIST , ADD_TO_CART, REMOVE_FROM_CART} from './product.types';
export interface IproductItem{
    name:string;
    price:number;
    offervalue:string;
    image:string;
}
interface IProduct{
    productsInCart:IproductItem[];
    productsInWishlist:IproductItem[];

}

const intialState: IProduct ={
    productsInCart :[],
    productsInWishlist:[],
}

const product = (state = intialState,action:ProductType): IProduct => {
    switch (action.type){
        case ADD_TO_CART:
            return{
                ...state,
                productsInCart:[...state.productsInCart,action.productItem],
            };
        case ADD_TO_WISHLIST:
            return{
                ...state,
                productsInWishlist:[...state.productsInWishlist,action.productItem],
            };
        case REMOVE_FROM_CART:
            let index:number=-1;
            for(let i=0;i<state.productsInCart.length;i++)
            {
                if(state.productsInCart[i].image===action.productItem.image)
                {
                    index=i;
                    break;
                }
            }
            return{
                ...state,
                // productsInCart:[...state.productsInCart,action.productItem],
                // productsInCart: [...state.productsInCart.splice(0, action.productItem), ...state.productsInCart.splice(1)],
                // productsInCart: state.productsInCart.splice(state.productsInCart.findIndex(x => x.name=action.productItem.name),1)
               productsInCart:state.productsInCart.slice(0,index).concat(state.productsInCart.splice(index+1))


            };
        default:
            return state
    }

};

export default product;