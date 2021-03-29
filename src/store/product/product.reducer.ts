import {ProductType,ADD_TO_WISHLIST , ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, ADD_TO_CHECKOUT} from './product.types';
export interface IproductItem{
    id:number;
    name:string;
    price:number;
    offervalue:string;
    image:string;
    quantity:number;
}
interface IProduct{
    productsInCart:IproductItem[];
    productsInWishlist:IproductItem[];
    productsInCheckout:IproductItem[];

}

const intialState: IProduct ={
    productsInCart :[],
    productsInWishlist:[],
    productsInCheckout:[],
}

const product = (state = intialState,action:ProductType): IProduct => {
    switch (action.type){
        case ADD_TO_CART:
           
            let indexofadd=-1;
            for(let i=0;i<state.productsInCart.length;i++)
            {
                if(action.productItem.id===state.productsInCart[i].id)
                {
                    
                    indexofadd=i;
                    action.productItem.quantity+=state.productsInCart[i].quantity;

                }
            }
            // if(!presentInCart){
            //     return{
            //         ...state,   
            //         productsInCart:[...state.productsInCart,action.productItem],
            //     };
            // }
            // else{
                return{
                    ...state,
                    // productsInCart:state.productsInCart.slice(0,index).concat(state.productsInCart.splice(index+1)),
                    productsInCart:state.productsInCart.splice(0,indexofadd).concat(action.productItem).concat(state.productsInCart.splice(indexofadd+1)),
                }
            // }     
        case ADD_TO_WISHLIST:
            let indexToWishlist :number=-1;
                for(let i=0;i<state.productsInWishlist.length;i++)
                {
                    if(state.productsInWishlist[i].image===action.productItem.image)
                    {
                        indexToWishlist=i;
                        break;
                    }
                }
            if(indexToWishlist===-1)
            return{
                ...state,
                productsInWishlist:[...state.productsInWishlist,action.productItem],
            };
            else
            return{
                ...state,
            }
        case ADD_TO_CHECKOUT:
            return{
                ...state,
                productsInCheckout:[...state.productsInCart, ...state.productsInCheckout],
                productsInCart:[],
            }
                
        case REMOVE_FROM_CART:
            let index=-1;
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
            case REMOVE_FROM_WISHLIST:
                let indexOfWishlist :number=-1;
                for(let i=0;i<state.productsInWishlist.length;i++)
                {
                    if(state.productsInWishlist[i].image===action.productItem.image)
                    {
                        indexOfWishlist=i;
                        break;
                    }
                }
                return{
                    ...state,
                   productsInWishlist:state.productsInWishlist.slice(0,indexOfWishlist).concat(state.productsInWishlist.splice(indexOfWishlist+1))
                };
        default:
            return state
    }

};

export default product;