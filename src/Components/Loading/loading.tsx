import { Component } from "react";
import './loading.css';


class Loading extends Component{
    render(){
        return(
            <div className="loading-logo">
            <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading..."></img>
            </div>
        );
    }
}

export default Loading;