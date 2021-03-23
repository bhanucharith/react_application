import React ,{Component} from 'react';
import './Categories.css';
import { RouteComponentProps, withRouter } from 'react-router-dom';
interface Iprops extends RouteComponentProps{}
class Categories  extends Component<Iprops> {
    
    render() { 
        return ( 
            <div className="categories-container">
            <div className="heading items">
                 <i className="fa fa-align-justify"></i>
                 <h4>CATEGORIES</h4>
            </div>
            <div onClick={()=>this.props.history.push("/clothing")} className="items">
                    <i className="fa fa-shopping-bag"></i>
                 <p>Clothing</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div onClick={()=>this.props.history.push("/electronics")} className="items">
                   <i className="fa fa-laptop"></i>
                 <p>Electronics</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div onClick={()=>this.props.history.push("/footware")} className="items">
                    <i className="fa fa-paw"></i>
                 <p>Footware</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div onClick={()=>this.props.history.push("/watches")} className="items">
                    <i className="fa fa-clock-o"></i>
                 <p>Watches</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div onClick={()=>this.props.history.push("/jewellery")} className="items">
                    <i className="fa fa-diamond"></i>
                 <p>Jewellery</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div onClick={()=>this.props.history.push("/healthandbeauty")} className="items">
                    <i className="fa fa-heartbeat"></i>
                 <p>Health and Beauty</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div onClick={()=>this.props.history.push("/kids")}className="items">
                    <i className="fa fa-paper-plane"></i>
                 <p>Kids and Babies</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            <div onClick={()=>this.props.history.push("/sports")} className="items">
                    <i className="fa fa-futbol-o"></i>
                 <p>Sports</p>
                 <small><i className="fa fa-angle-right"></i></small>
            </div>
            
     
         </div>
       );
    }
}
 
export default withRouter(Categories);