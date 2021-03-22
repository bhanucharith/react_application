// import React from 'react';
// import logo from './logo.svg';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import "./App.css";
import Clothing from "./Components/Clothing/Clothing";
import Electronics from "./Components/Electronics/Electronics";
import Footware from "./Components/Footware/Footware";
import HealthAndBeauty from "./Components/HealthAndBeauty/HealthAndBeauty";
import Homepage from "./Components/Homepage/Homepage";
import Jwellery from "./Components/Jwellery/Jwellery";
import Kids from "./Components/Kids/Kids";
import Login from "./Components/Login/Login";
import Mycart from "./Components/Mycart/Mycart";
import ProductFullDetais from "./Components/ProductFullDetails/ProductFullDetails";
import Sports from "./Components/Sports/Sports";
import TodayOffer from "./Components/TodayOffer/TodayOffer";
import Watches from "./Components/Watches/Watches";
import Wishlist from "./Components/Wishlist/Wishlist";
import rootReducer from "./store/reducers";


const store = createStore(rootReducer(),(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
function App() {
  return (
    <>
      {/* 
       <Header/>
       <div className="section1">
         <Categories/>
         <Offers/>
       </div>
       <div className="section2">
         <Hotdeals/>
         <Newproducts/>
       </div> */}
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />

            <Route path="/electronics" exact component={Electronics} />
            <Route path="/clothing" exact component={Clothing} />
            <Route path="/watches" exact component={Watches} />
            <Route path="/footware" exact component={Footware} />
            <Route path="/login" exact component={Login} />
            <Route path="/sports" exact component={Sports} />
            <Route path="/jwellery" exact component={Jwellery} />
            <Route path="/healthandbeauty" exact component={HealthAndBeauty} />
            <Route path="/kids" exact component={Kids} />
            <Route path="/todaysoffer" exact component={TodayOffer} />
            <Route path="/mycart" exact component={Mycart} />
            <Route path="/wishlist" exact component={Wishlist} />
            <Route path="/productfulldetails"  component={ProductFullDetais} />
          </Switch>
        </BrowserRouter>
      </Provider>

      
    </>
  );
}

export default App;
