import { combineReducers } from "redux";
import product from "./product/product.reducer";

const rootReducer =() => combineReducers({product})

export type RootState =ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;