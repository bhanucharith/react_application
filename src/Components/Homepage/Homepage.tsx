import { Component } from 'react';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import Hotdeals from '../Hotdeals/Hotdeals';
import Loading from '../Loading/loading';
import Newproducts from '../Newproducts/Newproducts';
import Offers from '../Offers/Offers';
interface Istate{
  isloading:boolean;
}
interface Iprop{}
class Homepage extends Component<Iprop,Istate> {

  public state:Istate ={
    isloading:true,
  };
  componentDidMount(){
    console.log("In component did mount method");
    setTimeout(()=>{this.changeloadingstate()},1000);
  }
  shouldComponentUpdate(){
    console.log("In should component update method");
    if(this.state.isloading)
    return true;
    return false;
  }
  changeloadingstate =()=>{
    this.setState({isloading:false});
  }
  render(){
  if(!this.state.isloading)
  return (
       <>
       
       <Header/>
       <div className="section1">
         <Categories/>
         <Offers/>
       </div>
       <div className="section2">
         <Hotdeals/>
         <Newproducts/>
       </div>
       
    </>
  );
  else
  return(<Loading/>);
  }
}

export default Homepage;
