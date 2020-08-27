import React from 'react'   
import '../css/Nav.scss'
import logo from '../../img/logoLovin.jpg'
import signature from '../../img/signature.png'
import {Link} from 'react-router-dom';


const Nav=()=>{
 return(
     <div>
   
     <nav>

         <div className="globalContainer">
             <div className="upsNav">
                <div className="logo">
                    <img src={logo} alt="logoLovinroatan" />  
                </div>
                <div className="textEngage">
                    <p className="testimony">As Roatan Wedding pros, LovinRoatan certified Wedding planners have the experience, training and intuition to help create your dream wedding and reception at any of our 8 exclusive Beach Front Venues at an affordable price.</p>
                </div>
                <div className="sign"><img src={signature} alt="signature ceo lovinroatan" /></div>
             </div>
             <div className="lineBlackNav"></div>
             <div className="bottomNav">
                <Link to="/" >Home</Link>
                <Link to="/CruiseShip" > Cruise Ship Wedding</Link>
                <Link to="/BeachFront">Beach Front Wedding</Link>
                <Link to="/AboutUs">The Team</Link>
                <a href="https://docs.google.com/forms/d/1sbm_sAwTNQt5CYt85NWqvcbl2Av9c6cxWpCstPW2t18/edit">Contact Us</a>
             </div>
         </div>
        
     </nav>
     </div>
 )   
}
export default Nav