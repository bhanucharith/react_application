import { Component } from "react";


import Header from "../Header/Header";
import './Login.css';

import Loginpage from 'landingpage-login/Login';

class Login extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            
            {/* <div className="body">
            
               <form className="loginform">
                   <label htmlFor="username">Username</label>
                   <input type="text" name="username"></input>
                   <label htmlFor="password">Password</label>
                   <input type="text" name="Pasword"></input>
                   <button type="submit">Log In</button>
                   <p>Forgot password?</p>
               </form>
            </div> */}
            <Loginpage/>
            </div>
           
        );
    }
}

export default Login;