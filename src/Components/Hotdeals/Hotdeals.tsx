import React ,{Component} from 'react';
import './Hotdeals.css';
 
class Hotdeals  extends Component {
    
    render() { 
        return ( 
            <div className="hotdeals">
             <h4 className="hotdeals-title">HOT DEALS</h4>
             <div className="deal-item">
                 <p className="offervalue">
                     49%<br></br>OFF
                 </p>
                 <div className="offertime">
                     <p>120 days</p>
                     <p>20 Hrs</p>
                     <p>36 Mins</p>
                     <p>50 secs</p>
                 </div>
             </div>
             <h4 className="item-name">Tshirt</h4>
             <div className="review-star">
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star-o"></i>
             </div>
             <p className="price">$400.00</p>
         </div>
       );
    }
}
 
export default Hotdeals;