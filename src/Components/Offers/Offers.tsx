import React ,{Component} from 'react';
import './Offers.css';
 
class Offers  extends Component {
    
    render() { 
        return ( 
            <div className="container">
            <div className="heading-image">
                <div className="content">
                <p>SPRING 2016</p>
                <h3>WOMEN FASHION</h3>
                <p>lorem bbh hdyd bsuyfbvu sdfuchanuf bhbhnukai bhd babfa</p>
                <button >SHOP NOW</button>
                </div>
            </div>
            <div className="offers">
                <div className="offer">
                    <h3>MONEY BACK</h3>
                    <p>30 Days Money Back Guarentee</p>
                </div>
                <div className="offer">
                    <h3>FREE SHIPPING</h3>
                    <p>Shipping on orders over $99</p>
                </div>
                <div className="offer">
                    <h3>SPECIAL SALE</h3>
                    <p>Extra $5 off on all items</p>
                </div>
            </div>
        </div>
       );
    }
}
 
export default Offers;