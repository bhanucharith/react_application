import React ,{Component} from 'react';
import './Categories.css';
 
class Categories  extends Component {
    
    render() { 
        return ( 
            <div className="categories-container">
            <div className="heading items">
                 <i className="fa fa-align-justify"></i>
                 <h4>CATEGORIES</h4>
            </div>
            <div className="items">
                    <i className="fa fa-shopping-bag"></i>
                 <p>Clothing</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div className="items">
                   <i className="fa fa-laptop"></i>
                 <p>Electronics</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div className="items">
                    <i className="fa fa-paw"></i>
                 <p>Footware</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div className="items">
                    <i className="fa fa-clock-o"></i>
                 <p>Watches</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div className="items">
                    <i className="fa fa-diamond"></i>
                 <p>Jwellery</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div className="items">
                    <i className="fa fa-heartbeat"></i>
                 <p>Health and Beauty</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div className="items">
                    <i className="fa fa-paper-plane"></i>
                 <p>Kids and Babies</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div className="items">
                    <i className="fa fa-futbol-o"></i>
                 <p>Sports</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div className="items">
                    <i className="fa fa-leaf"></i>
                 <p>Home and Garden</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
     
         </div>
       );
    }
}
 
export default Categories;