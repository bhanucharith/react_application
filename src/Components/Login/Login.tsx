import { Component } from "react";


import Header from "../Header/Header";
import './Login.css';

// import Loginpage from 'landingpage-login/Login';
import { userdetails } from "../../productdetails";
interface Iprop{
}
interface Istate{
    username:string;
    password:string;
    login:boolean;
    userdata:any;
}

class Login extends Component<Iprop,Istate>{

    constructor(props:any){
        super(props);
        this.state={username:'',password:'',login:false,userdata:{}}
    }
    submit=(event: { preventDefault: () => void; })=>{
        event.preventDefault();
        
        for(let i=0;i<userdetails.length;i++)
        {
          if(userdetails[i].username===this.state.username && userdetails[i].password===this.state.password)
           {
               
               this.setState({login:true});
               this.setState({userdata:userdetails[i]});
           }
        }
        
    }
    setusername(user:string) {
        this.setState({username: user});
      }
      setpassword(pw:string) {
        this.setState({password: pw});
      }
    logout=()=>{
         this.setState({login:false});
    }
    checklogin(){
        let Loginform;
        if(!this.state.login)
        {
           Loginform= <div className="body">
            
            <form className="loginform" onSubmit={this.submit}>
                <label htmlFor="username">Username</label>
                <input type="text" onChange={event => this.setusername(event.target.value)}></input>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={event => this.setpassword(event.target.value)} name="Pasword"></input>
                <button type="submit">Log In</button>
                <p>Forgot password?</p>
            </form>
         </div>
         
        }
        else{
           Loginform= <div className='loginform'>
                            <h3>Successfully logged in</h3>
                            <p>customer Id: {this.state.userdata.id}</p>
                            <p> username: {this.state.userdata.username}</p>
                            <p>Name: {this.state.userdata.name}</p>
                            <p>Email: {this.state.userdata.email}</p>
                            <button onClick={this.logout}>Log out</button>
                     </div>
        }
        return Loginform;
    }
    render(){
        return(
            <div>
                
            <Header/>
            
            {/* <div className="body">
            
               <form className="loginform" onSubmit={this.submit}>
                   <label htmlFor="username">Username</label>
                   <input type="text" onChange={event => this.setusername(event.target.value)}></input>
                   <label htmlFor="password">Password</label>
                   <input type="password" onChange={event => this.setusername(event.target.value)} name="Pasword"></input>
                   <button type="submit">Log In</button>
                   <p>Forgot password?</p>
               </form>
            </div>
            <Loginpage/> */}
            {this.checklogin()}
            </div>
           
        );
    }
    
}

export default Login;
